'use strict'

const sQualification = require('../services/sQualification')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createQualification (req, res) {
  try {
    const qualification = await sQualification.createQualification(req.body)

    makeResponseOk(res, { qualification }, 'qualification/single', 'createdM', 'Calificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateQualification (req, res) {
  try {
    const qualification = await sQualification.updateQualification(req.params.id, req.body)

    makeResponseOk(res, { qualification }, 'qualification/single', 'updatedM', 'Calificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteQualification (req, res) {
  try {
    await sQualification.deleteQualification(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Calificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQualification (req, res) {
  try {
    const qualification = await sQualification.getQualificationById(req.params.id)

    makeResponseOk(res, { qualification }, 'qualification/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQualificationByUser (req, res) {
  try {
    const qualifications = await sQualification.getQualificationByUser(req.params.userId)

    makeResponseOk(res, { qualifications }, 'qualification/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getQualificationByServiceDetail (req, res) {
  try {
    const qualifications = await sQualification.getQualificationByServiceDetail(req.params.serviceDetailId)

    makeResponseOk(res, { qualifications }, 'qualification/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createQualification,
  updateQualification,
  deleteQualification,
  getQualification,
  getQualificationByUser,
  getQualificationByServiceDetail
}
