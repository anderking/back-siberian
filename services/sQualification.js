'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createQualification (data) {
  const { UserId, ServiceDetailId, AuthorId, ServiceOrderDetailId } = data

  if (!AuthorId) throwError('qualification05')
  if (!ServiceOrderDetailId) throwError('qualification06')
  if (!UserId && !ServiceDetailId) throwError('qualification02')
  if (!data.questions) throwError('qualification07')
  if (await serviceOrderCanBeQualified(data)) throwError('qualification03')

  const qualification = await models.Qualification.create(data)

  await models.QualificationQuestion.bulkCreate(await questions(data.questions, qualification.id))

  return getQualificationById(qualification.id)
}

async function updateQualification (id, data) {
  const qualification = await getQualificationById(id)

  await qualification.update(data)

  if (data.questions) {
    await models.QualificationQuestion.bulkCreate(await questions(data.questions, qualification.id),
      { updateOnDuplicate: ['points', 'status'] })
  }

  return getQualificationById(id)
}

async function deleteQualification (id) {
  const qualification = await getQualificationById(id)

  return qualification.update({ status: 'deleted' })
}

async function getQualificationById (id) {
  const qualification = await models.Qualification.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'Author' },
      { model: models.User, as: 'User', required: false },
      { model: models.ServiceDetail, include: { model: models.Component }, required: false },
      { model: models.ServiceOrderDetail,
        include: [
          { model: models.ServiceDetail, include: { model: models.Component } },
          { model: models.ServiceOrder, include: { model: models.Revision } }
        ]
      }, { model: models.Question }
    ]
  })

  if (!qualification) { throwError('qualification01') }

  return qualification
}

async function getQualificationByUser (UserId) {
  return models.Qualification.findAll({
    where: { UserId },
    include: [
      { model: models.User, as: 'Author' },
      { model: models.User, as: 'User' },
      { model: models.ServiceOrderDetail,
        include: [
          { model: models.ServiceDetail, include: { model: models.Component } },
          { model: models.ServiceOrder, include: { model: models.Revision } }
        ]
      }, { model: models.Question }
    ],
    order: [['status', 'ASC']]
  })
}

async function getQualificationByServiceDetail (ServiceDetailId) {
  return models.Qualification.findAll({
    where: { ServiceDetailId },
    include: [
      { model: models.User, as: 'Author' },
      { model: models.ServiceDetail, include: { model: models.Component } },
      { model: models.ServiceOrderDetail,
        include: [
          { model: models.ServiceDetail, include: { model: models.Component } },
          { model: models.ServiceOrder, include: { model: models.Revision } }
        ]
      }, { model: models.Question }
    ],
    order: [['status', 'ASC']]
  })
}

async function serviceOrderCanBeQualified ({ ServiceOrderDetailId }) {
  const serviceOrderDetail = await models.ServiceOrderDetail.findOne({
    where: { id: ServiceOrderDetailId },
    include: { model: models.ServiceOrder }
  })

  if (!serviceOrderDetail) throwError('qualification04')

  const { status } = serviceOrderDetail.ServiceOrder

  return (status !== 'finalized' && status !== 'warranty')
}

async function questions (questions, qualificationId) {
  await questions.filter(async question =>
    question.QuestionId && await models.Question.findOne({
      where: { id: question.QuestionId }, attributes: ['status']
    }) === 'active')

  questions.map((question) => { question.QualificationId = qualificationId })

  return questions
}

module.exports = {
  createQualification,
  updateQualification,
  deleteQualification,
  getQualificationById,
  getQualificationByUser,
  getQualificationByServiceDetail
}
