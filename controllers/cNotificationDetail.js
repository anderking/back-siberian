'use strict'

const sNotificationDetail = require('../services/sNotificationDetail')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')
const { throwError } = require('../global/helpers')

async function addNotificationDetail (req, res) {
  try {
    const notificationDetail = await sNotificationDetail.createNotificationDetail(req.body)

    makeResponseOk(res, { notificationDetail }, 'notificationDetail/single', 'createdM', 'Notificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateNotificationDetail (req, res) {
  try {
    const notificationDetail = await sNotificationDetail.updateNotificationDetail(req.params.id, req.body)

    makeResponseOk(res, { notificationDetail }, 'notificationDetail/single', 'updatedM', 'Notificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteNotificationDetail (req, res) {
  try {
    await sNotificationDetail.deleteNotificationDetail(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Notificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getNotificationDetails (req, res) {
  try {
    const notificationDetails = await sNotificationDetail.getNotificationDetails()

    if (!notificationDetails.length) {
      throwError('notificationDetail02')
    }

    makeResponseOk(res, { notificationDetails }, 'notificationDetail/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getNotificationDetail (req, res) {
  try {
    const notificationDetail = await sNotificationDetail.getNotificationDetailByID(req.params.id)

    makeResponseOk(res, { notificationDetail }, 'notificationDetail/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function changeStatus (req, res) {
  try {
    await sNotificationDetail.updateStatus(req.params.id, req.params.status)

    const message = req.params.status === 'active' ? 'activatedM' : 'deactivatedM'

    makeResponseOkMessage(res, message, 'Notificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  addNotificationDetail,
  updateNotificationDetail,
  deleteNotificationDetail,
  getNotificationDetails,
  getNotificationDetail,
  changeStatus
}
