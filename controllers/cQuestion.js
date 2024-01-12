'use strict'

const sQuestion = require('../services/sQuestion')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createQuestion (req, res) {
  try {
    const question = await sQuestion.createQuestion(req.body)

    makeResponseOk(res, { question }, 'question/single', 'createdM', 'Pregunta')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateQuestion (req, res) {
  try {
    const question = await sQuestion.updateQuestion(req.params.id, req.body)

    makeResponseOk(res, { question }, 'question/single', 'updatedM', 'Pregunta')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteQuestion (req, res) {
  try {
    await sQuestion.deleteQuestion(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Pregunta')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQuestion (req, res) {
  try {
    const question = await sQuestion.getQuestionById(req.params.id)

    makeResponseOk(res, { question }, 'question/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQuestions (req, res) {
  try {
    const questions = await sQuestion.getQuestions()

    makeResponseOk(res, { questions }, 'question/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQuestionsByClient (req, res) {
  try {
    const questions = await sQuestion.getQuestionsByClient()

    makeResponseOk(res, { questions }, 'question/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQuestionsByLender (req, res) {
  try {
    const questions = await sQuestion.getQuestionsByLender()

    makeResponseOk(res, { questions }, 'question/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQuestionsByService (req, res) {
  try {
    const questions = await sQuestion.getQuestionsByService()

    makeResponseOk(res, { questions }, 'question/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
  getQuestions,
  getQuestionsByClient,
  getQuestionsByLender,
  getQuestionsByService
}
