'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createQuestion (data) {
  const question = await models.Question.create(data)

  return getQuestionById(question.id)
}

async function updateQuestion (id, data) {
  const question = await getQuestionById(id)

  await question.update(data)

  return getQuestionById(id)
}

async function deleteQuestion (id) {
  const question = await getQuestionById(id)

  await question.update({ status: 'deleted' })

  return getQuestionById(id)
}

async function getQuestionById (id) {
  const question = await models.Question.findOne({ where: { id } })

  if (!question) { throwError('question01') }

  return question
}

async function getQuestions () {
  return models.Question.findAll({ order: [['status', 'ASC']] })
}

async function getQuestionsByClient () {
  return models.Question.findAll({ where: { kind: 'cliente' }, order: [['status', 'ASC']] })
}

async function getQuestionsByLender () {
  return models.Question.findAll({ where: { kind: 'prestador' }, order: [['status', 'ASC']] })
}

async function getQuestionsByService () {
  return models.Question.findAll({ where: { kind: 'servicio' }, order: [['status', 'ASC']] })
}

module.exports = {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestions,
  getQuestionsByClient,
  getQuestionsByLender,
  getQuestionsByService
}
