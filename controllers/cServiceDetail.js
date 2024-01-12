'use strict'

const sServiceDetail = require('../services/sServiceDetail')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createServiceDetail (req, res) {
  try {
    const serviceDetail = await sServiceDetail.createServiceDetail(req.body)

    makeResponseOk(res, { serviceDetail }, 'serviceDetail/single', 'createdM', 'Detalle Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateServiceDetail (req, res) {
  try {
    const serviceDetail = await sServiceDetail.updateServiceDetail(req.params.id, req.body)

    makeResponseOk(res, { serviceDetail }, 'serviceDetail/single', 'updatedM', 'Detalle Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteServiceDetail (req, res) {
  try {
    await sServiceDetail.deleteServiceDetail(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Detalle Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getServiceDetail (req, res) {
  try {
    const serviceDetail = await sServiceDetail.getServiceDetailById(req.params.id)

    makeResponseOk(res, { serviceDetail }, 'serviceDetail/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getServiceDetails (req, res) {
  try {
    const serviceDetails = await sServiceDetail.getServiceDetails()

    makeResponseOk(res, { serviceDetails }, 'serviceDetail/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createServiceDetail,
  updateServiceDetail,
  deleteServiceDetail,
  getServiceDetail,
  getServiceDetails
}
