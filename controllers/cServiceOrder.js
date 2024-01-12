'use strict'

const sServiceOrder = require('../services/sServiceOrder')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')
const { createNotification } = require('../services/sNotification')

async function createServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.createServiceOrder(req.body, req.file)

    await createNotification(serviceOrder, 'Presupuesto realizado')

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'createdM', 'Presupuesto')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.updateServiceOrder(req.params.id, req.body, req.files)

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'updatedM', 'Orden de Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.getServiceOrderById(req.params.id)

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getServiceOrders (req, res) {
  try {
    const serviceOrders = await sServiceOrder.getServiceOrders()

    makeResponseOk(res, { serviceOrders }, 'serviceOrder/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}
async function getServiceOrdersByUser (req, res) {
  try {
    const serviceOrders = await sServiceOrder.getServiceOrdersByUser(req.params.userId)

    makeResponseOk(res, { serviceOrders }, 'serviceOrder/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getServiceOrdersByLender (req, res) {
  try {
    const serviceOrders = await sServiceOrder.getServiceOrdersByLender(req.params.lenderId)

    makeResponseOk(res, { serviceOrders }, 'serviceOrder/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function approveServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.approveServiceOrder(req.params.id, req.body)

    await createNotification(serviceOrder, 'Presupuesto aceptado')

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'serviceOrderApproved', 'Orden de Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function rejectServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.rejectServiceOrder(req.params.id, req.params.motiveId, req.body)

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'serviceOrderRejected', 'Orden de Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function warrantyServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.warrantyServiceOrder(req.params.id, req.body)

    await createNotification(serviceOrder, 'Garantía emitida')

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'serviceOrderWarrantied', 'Orden de Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function completedServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.completedServiceOrder(req.params.id, req.body)

    await createNotification(serviceOrder, 'Servicio finalizado')

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'serviceOrderCompleted', 'Orden de Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function cancelServiceOrder (req, res) {
  try {
    const serviceOrder = await sServiceOrder.cancelServiceOrder(req.params.id)

    await createNotification(serviceOrder, 'Servicio cancelado')

    makeResponseOkMessage(res, 'serviceOrderCancelled', 'Orden de Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function markActivities (req, res) {
  try {
    const serviceOrder = await sServiceOrder.markActivities(req.params.id, req.body)

    makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'updatedM', 'Orden de Servicio')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createServiceOrder,
  updateServiceOrder,
  cancelServiceOrder,
  getServiceOrder,
  getServiceOrders,
  approveServiceOrder,
  rejectServiceOrder,
  warrantyServiceOrder,
  getServiceOrdersByUser,
  completedServiceOrder,
	getServiceOrdersByLender,
	markActivities
}
