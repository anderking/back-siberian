'use strict'

const models = require('../models')
const sUser = require('../services/sUser')
const { throwError } = require('../global/helpers')
const sBitacora = require('./sBitacora')
const sRevision = require('./sRevision')
const sCalendar = require('./sCalendar')

async function createServiceOrder (data, fileImage) {
  if (!data.RevisionId) throwError('serviceOrder08')
  if (!data.serviceOrderDetails) throwError('serviceOrder09')

  const serviceOrderCreated = await models.sequelize.transaction(async transaction => {
    await sRevision.finishRevision(data.RevisionId, transaction)
    const revision = await sRevision.getRevisionById(data.RevisionId)

    revision.PromotionId ? data.discount = revision.Promotion.percentDiscount : data.discount = 0.00

		if (fileImage) { data.imagePaymentUrl = fileImage.path }
		
		const serviceOrder = await models.ServiceOrder.create(data, { transaction })
		await setServicesOrderDetails(data.serviceOrderDetails, serviceOrder, transaction, true)
		
    return serviceOrder
	})
	
	await setActivities(serviceOrderCreated.id)

  await sBitacora.addBitacora({
    type: 'serviceOrder',
    eventType: 'budget',
    ServiceOrderId: serviceOrderCreated.id
  })

  return getServiceOrderById(serviceOrderCreated.id)
}

async function setActivities (id) {
  const activities = await models.sequelize.transaction(async transaction => {
		const so = await getServiceOrderById(id)

		const act = await models.ServiceDetail.findOne({
			where: {
				id: so.ServiceOrderDetails[0].ServiceDetailId
			},
			include: [{
				model: models.Activity
			}]
		})

		const act2 = act.Activities.map(({name}) =>  ({name}))
		act2.forEach(x => x.ServiceOrderId = id)
		await models.ServiceOrderActivities.bulkCreate(act2)

		const result = await models.ServiceOrderActivities.findAll({
			where: {
				ServiceOrderId: id
			}
		})

		await so.setServiceOrderActivities(result)
		return result
	})

}

async function updateServiceOrder (id, data, fileImages) {
  const serviceOrder = await getServiceOrderById(id)

  if (serviceOrder.status !== 'budgeted') throwError('serviceOrder13')

  await models.sequelize.transaction(async transaction => {
    if (fileImages && fileImages['imagePaymentUrl']) { data.imagePaymentUrl = fileImages['imagePaymentUrl'][0].path }
    if (fileImages && fileImages['imageClaimUrl']) { data.imageClaimUrl = fileImages['imageClaimUrl'][0].path }

    await serviceOrder.update(data, { transaction })

    if (data.serviceOrderDetails) { await setServicesOrderDetails(data.serviceOrderDetails, serviceOrder, transaction, false) }
  })

  return getServiceOrderById(id)
}

async function getServiceOrderById (id) {
  const serviceOrder = await models.ServiceOrder.findOne({
    where: { id },
    include: [
      { model: models.Revision,
        include: [
          { model: models.User, attributes: { exclude: ['password'] } },
          { model: models.Promotion, require: false },
          { model: models.VarietyDetail,
            include: [{
              model: models.VarietyEquipinfras,
              include: [
                { model: models.Variety, attributes: ['id', 'name'] },
                { model: models.Equipinfras, attributes: ['id', 'name'] }]
            }]
          },
          { model: models.Calendar,
            required: false,
            where: { status: 'booked' },
            include: [{ model: models.LenderCalendar,
              include: [{ model: models.User, attributes: { exclude: ['password'] } }]
            }]
          }
          ]
      },
      { model: models.ServiceOrderDetail,
        where: { status: 'approved' },
        include: [
          { model: models.ServiceDetail,
            include: [
              { model: models.Resource, where: { status: 'active' }, required: false },
              { model: models.Activity, where: { status: 'active' }, required: false },
              { model: models.Policy, where: { status: 'active' }, required: false },
              { model: models.Skill, where: { status: 'active' }, required: false },
              { model: models.Component, where: { status: 'active' }, required: false }
            ]
          },
          { model: models.Calendar,
            required: false,
            include: [{ model: models.LenderCalendar,
              include: [{ model: models.User, attributes: { exclude: ['password'] } }]
            }]
          }
        ]
      },
			{ model: models.Bitacora, include: [{ model: models.Motive, required: false }] },
			{
				model: models.ServiceOrderActivities
			}
    ],
    order: [
      ['id', 'DESC'],
      [{ model: models.Bitacora }, 'id', 'ASC']
    ]
  })

  if (!serviceOrder) throwError('serviceOrder01')

  return serviceOrder
}

async function getServiceOrders () {
  return models.ServiceOrder.findAll({
    include: [
      { model: models.Revision,
        include: [
          { model: models.User, attributes: { exclude: ['password'] } },
          { model: models.Promotion, require: false },
          { model: models.VarietyDetail,
            include: [{
              model: models.VarietyEquipinfras,
              include: [
                { model: models.Variety, attributes: ['id', 'name'] },
                { model: models.Equipinfras, attributes: ['id', 'name'] }]
            }]
          },
          { model: models.Calendar,
            required: false,
            where: { status: 'booked' },
            include: [{ model: models.LenderCalendar,
              include: [{ model: models.User, attributes: { exclude: ['password'] } }]
            }]
          }
        ]
      },
      { model: models.ServiceOrderDetail,
        where: { status: 'approved' },
        include: [{ model: models.ServiceDetail,
          include: [{
            model: models.Resource, where: { status: 'active' }, required: false
          }] },
        { model: models.Calendar,
          required: false,
          include: [{ model: models.LenderCalendar,
            include: [{ model: models.User, attributes: { exclude: ['password'] } }]
          }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] }
    ],
    order: [
      ['id', 'DESC'],
      [{ model: models.Bitacora }, 'id', 'ASC']
    ]
  })
}

async function getServiceOrdersByUser (userId) {
  const user = await sUser.getUserByID(userId)

  return models.ServiceOrder.findAll({
    include: [
      { model: models.Revision,
        where: { UserId: user.id },
        include: [
          { model: models.User, attributes: { exclude: ['password'] } },
          { model: models.Promotion, require: false },
          { model: models.VarietyDetail,
            include: [{
              model: models.VarietyEquipinfras,
              include: [
                { model: models.Variety, attributes: ['id', 'name'] },
                { model: models.Equipinfras, attributes: ['id', 'name'] }]
            }]
          },
          { model: models.Calendar,
            required: false,
            where: { status: 'booked' },
            include: [{ model: models.LenderCalendar,
              include: [{ model: models.User, attributes: { exclude: ['password'] } }]
            }]
          }
        ]
      },
      { model: models.ServiceOrderDetail,
        where: { status: 'approved' },
        include: [{ model: models.ServiceDetail,
          include: [{
            model: models.Resource, where: { status: 'active' }, required: false
          }] },
        { model: models.Calendar,
          required: false,
          include: [{ model: models.LenderCalendar,
            include: [{ model: models.User, attributes: { exclude: ['password'] } }]
          }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] }
    ],
    order: [
      ['id', 'DESC'],
      [{ model: models.Bitacora }, 'id', 'ASC']
    ]
  })
}

async function getServiceOrdersByLender (lenderId) {
  const lender = await sUser.getUserByID(lenderId)

  if (lender.Role.name !== 'Prestador') throwError('lender01')

  const serviceOrders = await models.ServiceOrder.findAll({
    include: [
      { model: models.Revision,
        attributes: ['id', 'description', 'price', 'createdAt', 'status'],
        include: [
          { model: models.User, attributes: { exclude: ['password'] } },
          { model: models.Promotion, require: false },
          { model: models.VarietyDetail,
            attributes: ['id', 'name', 'description', 'VarietyEquipinfraId'],
            include: [{
              model: models.VarietyEquipinfras,
              attributes: ['id'],
              include: [
                { model: models.Variety, attributes: ['id', 'name'] },
                { model: models.Equipinfras, attributes: ['id', 'name'] }]
            }]
          },
          { model: models.Calendar,
            required: false,
            where: { status: 'booked' },
            include: [{ model: models.LenderCalendar,
              include: [{ model: models.User, attributes: { exclude: ['password'] } }]
            }]
          }
        ]
      },
      { model: models.ServiceOrderDetail,
        where: { status: 'approved' },
        include: [{ model: models.ServiceDetail,
          include: [{
            model: models.Resource, where: { status: 'active' }, required: false
          }] },
        { model: models.Calendar,
          required: true,
          include: [{ model: models.LenderCalendar,
            include: [{ model: models.User, where: { id: lenderId }, attributes: { exclude: ['password'] } }]
          }]
        }]
      },
      { model: models.Bitacora, include: [{ model: models.Motive, required: false }] }
    ]
  })

  return serviceOrders
}

async function approveServiceOrder (id, data) {
  const serviceOrder = await getServiceOrderById(id)

  if (!data.serviceOrderDetails) throwError('serviceOrder11')
  if (data.serviceOrderDetails[0].calendars.length !== serviceOrder.ServiceOrderDetails[0].duration) { throwError('serviceOrder12') }
  if (serviceOrder.status !== 'budgeted') throwError('serviceOrder02')

  await sCalendar.addCalendar(data.serviceOrderDetails[0].calendars,
    serviceOrder.ServiceOrderDetails[0].id, 'calendar')
  await sBitacora.addBitacora({ type: 'serviceOrder',
    eventType: 'budgetEvaluation',
    ServiceOrderId: id })
  await serviceOrder.update({ status: 'approved' })

  return getServiceOrderById(id)
}

async function rejectServiceOrder (id, motiveId, data) {
  const serviceOrder = await getServiceOrderById(id)

  if (serviceOrder.status !== 'budgeted') throwError('serviceOrder03')

  await serviceOrder.update({ status: 'rejected' })
  await sBitacora.addBitacora({ type: 'serviceOrder',
    eventType: 'budgetEvaluation',
    ServiceOrderId: serviceOrder.id,
    MotiveId: motiveId,
    status: 'cancel',
    description: data.nota
  })

  return getServiceOrderById(serviceOrder.id)
}

async function cancelServiceOrder (id) {
  const serviceOrder = await getServiceOrderById(id)

  if (serviceOrder.status !== 'budgeted') { throwError('serviceOrder05') }

  await serviceOrder.update({ status: 'cancelled' })

  return getServiceOrderById(serviceOrder.id)
}

async function warrantyServiceOrder (id, data) {
  const serviceOrder = await getServiceOrderById(id)

  if (serviceOrder.status !== 'completed') throwError('serviceOrder04')

  await serviceOrder.update({ status: 'warranty' })
  await sBitacora.addBitacora({ type: 'serviceOrder',
    eventType: 'warranty',
    ServiceOrderId: serviceOrder.id,
    description: data.reason
  })

  return getServiceOrderById(serviceOrder.id)
}

async function completedServiceOrder (id, data) {
  const serviceOrder = await getServiceOrderById(id)

  if (serviceOrder.status !== 'approved') throwError('serviceOrder10')

  await serviceOrder.update({ status: 'completed' })
  await sBitacora.addBitacora({ type: 'serviceOrder',
    eventType: 'completed',
    ServiceOrderId: serviceOrder.id,
    description: data.reason
  })

  return getServiceOrderById(serviceOrder.id)
}

async function finishServiceOrder (id) {
  const serviceOrder = await getServiceOrderById(id)

  if (serviceOrder.status !== 'warranty') throwError('serviceOrder06')

  await serviceOrder.update({ status: 'finalized' })
  await sBitacora.addBitacora({ type: 'serviceOrder',
    eventType: 'closure',
    ServiceOrderId: serviceOrder.id })

  return getServiceOrderById(serviceOrder.id)
}

async function setServicesOrderDetails (serviceOrderDetails, serviceOrder, transaction, created) {
  const serviceOrderDetailsFiltered = await serviceOrderDetails.filter(async serviceOrderDetail =>
    serviceOrderDetail.ServiceDetailId && await models.ServiceDetail.findOne({
      where: { id: serviceOrderDetail.ServiceDetailId }, attributes: ['status']
    }) === 'active')

  serviceOrderDetailsFiltered.forEach((serviceOrderDetail) => { serviceOrderDetail.ServiceOrderId = serviceOrder.id })

  if (created) {
    return models.ServiceOrderDetail.bulkCreate(serviceOrderDetailsFiltered,
      { transaction })
  } else {
    return models.ServiceOrderDetail.bulkCreate(serviceOrderDetailsFiltered,
      { updateOnDuplicate: ['duration', 'status'] },
      { transaction })
  }
}

async function markActivities(id, data) {
	await models.ServiceOrderActivities.bulkCreate(data, {
		updateOnDuplicate: ['done']
	})
	return getServiceOrderById(id)
}

module.exports = {
  createServiceOrder,
  updateServiceOrder,
  cancelServiceOrder,
  getServiceOrderById,
  getServiceOrders,
  approveServiceOrder,
  rejectServiceOrder,
  warrantyServiceOrder,
  finishServiceOrder,
  getServiceOrdersByUser,
  completedServiceOrder,
	getServiceOrdersByLender,
	markActivities
}
