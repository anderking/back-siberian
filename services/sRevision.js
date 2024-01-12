'use strict'

module.exports = {
  createRevision,
  updateRevision,
  cancelRevision,
  getRevisionById,
  getRevisions,
  approveRevision,
  rejectRevision,
  diagnoseRevision,
  finishRevision,
  getRevisionsByUser,
  getRevisionsByLender,
  getRevisionsByLender2,
  irreparableRevision,
  createWarrantyRevision,
  getAllWarrantyRevision,
  getAllWarrantyRevisionsByLender,
  getAllWarrantyRevisionsByUser
}

const models = require('../models')
const { throwError } = require('../global/helpers')
const sCompany = require('./sCompany')
const sBitacora = require('./sBitacora')
const sUser = require('./sUser')
const sCalendar = require('./sCalendar')
const sServiceOrder = require('./sServiceOrder')

async function createRevision (data, fileImage) {
  if (!data.calendars) throwError('revision08')

  const company = await sCompany.getCompany()

  company ? data.price = company.revisionPrice : throwError('revision07')
  if (fileImage) { data.imageRequestUrl = fileImage.path }

  const revision = await models.Revision.create(data)

  await sCalendar.addCalendar(data.calendars, revision.id, 'calendar')

  await sBitacora.addBitacora({
    type: 'revision',
    eventType: 'request',
    RevisionId: revision.id })

  return getRevisionById(revision.id)
}

async function createWarrantyRevision (serviceOrderId, data, fileImage) {
  if (!data.calendars) throwError('revision08')

  const serviceOrder = await sServiceOrder.getServiceOrderById(serviceOrderId)
  const company = await sCompany.getCompany()

  if (serviceOrder.status !== 'warranty') throwError('revision12')
  company ? data.price = company.revisionPrice : throwError('revision07')
  if (fileImage) { data.imageRequestUrl = fileImage.path }
  setWarrantyData(data, serviceOrder)

  const revision = await models.Revision.create(data)

  await sCalendar.addCalendar(data.calendars, revision.id, 'calendar')
  await sBitacora.addBitacora({
    type: 'revision',
    eventType: 'request',
    RevisionId: revision.id })

  return getRevisionById(revision.id)
}

async function updateRevision (id, data, fileImages) {
  const revision = await getRevisionById(id)

  if (fileImages['imageRequestUrl']) { data.imageRequestUrl = fileImages['imageRequestUrl'][0].path }
  if (fileImages['imageRevisionUrl']) { data.imageRevisionUrl = fileImages['imageRevisionUrl'][0].path }

  await revision.update(data)

  return getRevisionById(id)
}

async function getRevisionById (id) {
  const revision = await models.Revision.findOne({
    where: { id },
    include: [
      { model: models.User },
      { model: models.VarietyDetail,
        include: [{
          model: models.VarietyEquipinfras,
          include: [
            { model: models.Variety, attributes: ['id', 'name'] },
            { model: models.Equipinfras, attributes: ['id', 'name'] }]
        }]
      },
      { model: models.Location },
      { model: models.Calendar,
        where: { status: 'booked' },
        include: [{ model: models.LenderCalendar,
          include: [{ model: models.User, attributes: { exclude: ['password'] } }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] },
      { model: models.Promotion, require: false }
    ],
    order: [
      ['id', 'DESC'],
      [{ model: models.Bitacora }, 'id', 'ASC'],
      ['status', 'ASC']
    ]
  })

  if (!revision) throwError('revision01')

  return revision
}

async function getAllWarrantyRevision () {
  return models.Revision.findAll({
    where: { isForGuarantee: true },
    include: [
      { model: models.User },
      { model: models.VarietyDetail,
        include: [{
          model: models.VarietyEquipinfras,
          include: [
            { model: models.Variety, attributes: ['id', 'name'] },
            { model: models.Equipinfras, attributes: ['id', 'name'] }]
        }]
      },
      { model: models.Location },
      { model: models.Calendar,
        include: [{ model: models.LenderCalendar,
          include: [{ model: models.User, attributes: { exclude: ['password'] } }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] }
    ],
    order: [['id', 'DESC'], ['status', 'ASC']]
  })
}

async function getRevisions () {
  return models.Revision.findAll({
    include: [
      { model: models.User },
      { model: models.VarietyDetail,
        include: [{
          model: models.VarietyEquipinfras,
          include: [
            { model: models.Variety, attributes: ['id', 'name'] },
            { model: models.Equipinfras, attributes: ['id', 'name'] }]
        }]
      },
      { model: models.Location },
      { model: models.Calendar,
        required: false,
        where: { status: 'booked' },
        include: [{ model: models.LenderCalendar,
          include: [{ model: models.User, attributes: { exclude: ['password'] } }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] },
      { model: models.Promotion, require: false }
    ],
    order: [
      ['id', 'DESC'],
      [{ model: models.Bitacora }, 'id', 'ASC'],
      ['status', 'ASC']
    ]
  })
}

async function getRevisionsByLender2 (lenderId) {
  const LenderCalendars = await models.Revision.findAll({
    include: [
      { model: models.User, required: true },
      { model: models.VarietyDetail,
        required: true,
        include: [{
          model: models.VarietyEquipinfras,
          required: true,
          include: [
            { model: models.Variety, attributes: ['id', 'name'], required: true },
            { model: models.Equipinfras, attributes: ['id', 'name'], required: true }]
        }]
      },
      { model: models.Location, required: true },
      { model: models.Calendar,
        required: true,
        include: [{ model: models.LenderCalendar,
          required: true,
          include: [{ model: models.User, where: { id: lenderId }, attributes: { exclude: ['password'], required: true } }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] }
    ],
    order: [['id', 'DESC'], ['status', 'ASC']]
  })
  if (!LenderCalendars || !LenderCalendars.length) { throwError('revision10') }
  return LenderCalendars
}

async function getRevisionsByUser (userId) {
  const user = await sUser.getUserByID(userId)

  return models.Revision.findAll({
    include: [
      { model: models.User, where: { id: user.id } },
      { model: models.VarietyDetail,
        include: [{
          model: models.VarietyEquipinfras,
          include: [
            { model: models.Variety, required: true, attributes: ['id', 'name'] },
            { model: models.Equipinfras, required: true, attributes: ['id', 'name'] }]
        }]
      },
      { model: models.Location },
      { model: models.Calendar,
        include: [{ model: models.LenderCalendar,
          include: [{ model: models.User, attributes: { exclude: ['password'] } }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] },
      { model: models.Promotion, require: false }
    ],
    order: [
      ['id', 'DESC'],
      [{ model: models.Bitacora }, 'id', 'ASC'],
      ['status', 'ASC']
    ]
  })
}

async function getAllWarrantyRevisionsByUser (userId) {
  const user = await sUser.getUserByID(userId)

  return models.Revision.findAll({
    where: { isForGuarantee: true },
    include: [
      { model: models.User, where: { id: user.id } },
      { model: models.VarietyDetail,
        include: [{
          model: models.VarietyEquipinfras,
          include: [
            { model: models.Variety, required: true, attributes: ['id', 'name'] },
            { model: models.Equipinfras, required: true, attributes: ['id', 'name'] }]
        }]
      },
      { model: models.Location },
      { model: models.Calendar,
        include: [{ model: models.LenderCalendar,
          include: [{ model: models.User, attributes: { exclude: ['password'] } }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] },
      { model: models.Promotion, require: false }
    ],
    order: [
      ['id', 'DESC'],
      [{ model: models.Bitacora }, 'id', 'ASC'],
      ['status', 'ASC']
    ]
  })
}

async function getAllWarrantyRevisionsByLender (lenderId) {
  const LenderCalendars = await models.Revision.findAll({
    where: { isForGuarantee: true },
    include: [
      { model: models.User, required: true },
      { model: models.VarietyDetail,
        required: true,
        include: [{
          model: models.VarietyEquipinfras,
          required: true,
          include: [
            { model: models.Variety, attributes: ['id', 'name'], required: true },
            { model: models.Equipinfras, attributes: ['id', 'name'], required: true }]
        }]
      },
      { model: models.Location, required: true },
      { model: models.Calendar,
        required: true,
        include: [{ model: models.LenderCalendar,
          required: true,
          include: [{ model: models.User, where: { id: lenderId }, attributes: { exclude: ['password'], required: true } }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] }
    ],
    order: [['id', 'DESC'], ['status', 'ASC']]
  })
  if (!LenderCalendars || !LenderCalendars.length) { throwError('revision10') }
  return LenderCalendars
}

async function getRevisionsByLender (lenderId) {
  const LenderCalendars = await models.User.findByPk(lenderId,
    { attributes: { exclude: ['password'] },
      include: [
        { model: models.Role, where: { name: 'Prestador' } },
        { model: models.LenderCalendar,
          attributes: ['id'],
          include: [{ model: models.Calendar,
            where: { status: 'booked' },
            include: [{ model: models.Revision,
              include: [
                { model: models.User },
                { model: models.Location },
                { model: models.VarietyDetail,
                  include: [{ model: models.VarietyEquipinfras
                  /*  include: [
                      { model: models.Variety, required: false, attributes: ['id', 'name'] },
                      { model: models.Equipinfras, required: false, attributes: ['id', 'name'] }] */
                  }]
                }]
            }]
          }],
          order: [['date', 'ASC']]
        }]
    })
  if (!LenderCalendars) { throwError('revision09') }
  return LenderCalendars
}

async function approveRevision (id) {
  const revision = await getRevisionById(id)

  if (revision.status !== 'requested') throwError('revision02')

  await revision.update({ status: 'approved' })
  await sBitacora.addBitacora({
    type: 'revision',
    eventType: 'requestEvaluation',
    RevisionId: revision.id
  })

  return getRevisionById(revision.id)
}

async function rejectRevision (id, motiveId, data) {
  const revision = await getRevisionById(id)

  if (revision.status !== 'requested') throwError('revision03')

  await revision.update({ status: 'rejected' })

  await sBitacora.addBitacora({
    type: 'revision',
    eventType: 'requestEvaluation',
    RevisionId: revision.id,
    MotiveId: motiveId,
    status: 'cancel',
    description: data.nota
  })

  return getRevisionById(revision.id)
}

async function cancelRevision (id) {
  const revision = await getRevisionById(id)

  if (revision.status !== 'requested' && revision.status !== 'approved') throwError('revision05')

  await revision.update({ status: 'cancelled' })

  return getRevisionById(revision.id)
}

async function diagnoseRevision (id, data, fileImage) {
  const revision = await getRevisionById(id)

  revision.status !== 'approved' ? throwError('revision04') : data.status = 'diagnosticated'
  if (fileImage) { data.imageRevisionUrl = fileImage.path }

  await revision.update(data)
  await sBitacora.addBitacora({ type: 'revision',
    eventType: 'execution',
    RevisionId: revision.id,
    description: data.nota })

  return getRevisionById(revision.id)
}

async function finishRevision (id, transaction) {
  const revision = await getRevisionById(id)

  if (revision.status !== 'diagnosticated') throwError('revision06')

  await revision.update({ status: 'finalized' }, { transaction })
  await sBitacora.addBitacora({ type: 'revision',
    eventType: 'closure',
    RevisionId: revision.id })

  return getRevisionById(revision.id)
}

async function irreparableRevision (id, motiveId, data) {
  const revision = await getRevisionById(id)

  if (revision.status !== 'diagnosticated') throwError('revision09')

  await revision.update({ status: 'irreparable' })
  await sBitacora.addBitacora({ type: 'revision',
    eventType: 'closure',
    RevisionId: revision.id,
    MotiveId: motiveId,
    status: 'cancel',
    description: data.nota })

  return getRevisionById(revision.id)
}

function setWarrantyData (data, serviceOrder) {
  data.isForGuarantee = true
  data.UserId = serviceOrder.Revision.UserId
  data.VarietyDetailId = serviceOrder.Revision.VarietyDetailId
  data.LocationId = serviceOrder.Revision.LocationId
  data.ServiceOrderId = serviceOrder.id
}
