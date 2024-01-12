'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')
const op = models.Sequelize.Op

async function createNotificationDetail (data) {
  const newNotificationDetail = await models.sequelize.transaction(async () => {
    const notificationDetails = await models.NotificationDetail.create(data)

    return notificationDetails
  })

  return getNotificationDetailByID(newNotificationDetail.id)
}

async function updateNotificationDetail (id, data) {
  const notificationDetail = await getNotificationDetailByID(id)

  return notificationDetail.update(data)
}

async function deleteNotificationDetail (id) {
  const notificationDetail = await getNotificationDetailByID(id)

  await notificationDetail.update({
    status: 'deleted'
  })
}

async function getNotificationDetailByID (id) {
  const notificationDetail = await models.NotificationDetail.findOne({
    where: {
      id: id,
      status: {
        [op.ne]: 'deleted'
      }
    }
  })

  if (!notificationDetail) {
    throwError('notificationDetail03')
  }

  return notificationDetail
}

async function getNotificationDetails () {
  return models.NotificationDetail.findAll({
    where: {
      status: {
        [op.ne]: 'deleted'
      }
    }
  })
}

async function updateStatus (id, status) {
  const notificationDetail = await models.NotificationDetail.findOne({
    where: {
      id: id,
      status: {
        [op.ne]: status
      }
    }
  })

  if (!notificationDetail) {
    throwError('notificationDetail03')
  }

  await notificationDetail.update({
    status: status
  })
}

module.exports = {
  createNotificationDetail,
  updateNotificationDetail,
  deleteNotificationDetail,
  getNotificationDetails,
  getNotificationDetailByID,
  updateStatus
}
