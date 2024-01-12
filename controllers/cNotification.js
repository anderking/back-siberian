'use strict'

const sNotification = require('../services/sNotification')
const { makeResponseOk, makeResponseException } = require('../global/responses')

async function updateNotification (req, res) {
  try {
    const notification = await sNotification.updateNotification(req.params.id, req.body)

    makeResponseOk(res, { notification }, 'notification/single', 'updatedM', 'Notificación')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getNotifications (req, res) {
  try {
    const notifications = await sNotification.getNotifications(req.params.id)

    makeResponseOk(res, { notifications }, 'notification/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  updateNotification,
  getNotifications
}
