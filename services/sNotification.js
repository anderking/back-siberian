'use strict'

const models = require('../models')
const { throwError, sendNotification } = require('../global/helpers')

async function createNotification (data, type) {
  const newNotification = await models.sequelize.transaction(async () => {
    const notification = await models.Notification.create({ read: false })

    await notification.setUser(data.UserId || data.Revision.UserId)

    if (data.PromotionId) {
      await notification.setPromotion(data.PromotionId)
    }
    if (data.BitacoraId) {
      await notification.setBitacora(data.BitacoraId)
    }

    const user = await notification.getUser()
    const notificationDetail = await models.NotificationDetail.findOne({
      where: {
        name: type
      }
    })

    await notification.setNotificationDetail(notificationDetail.id)

    const noti = {
      name: notificationDetail.name,
      message: notificationDetail.message,
      PromotionId: data.PromotionId ? data.PromotionId.toString() : '',
      BitacoraId: data.BitacoraId ? data.BitacoraId.toString() : ''
    }
    const token = user.androidId
    if (token) {
      await sendNotification(token, noti)
    }
    return notification
  })

  return getNotificationByID(newNotification.id)
}

async function updateNotification (id, data) {
  const notification = await getNotificationByID(id)

  return notification.update(data)
}

async function getNotificationByID (id) {
  const notification = await models.Notification.findByPk(id)

  if (!notification) {
    throwError('notification03')
  }

  return notification
}

async function getNotifications (id) {
  return models.Notification.findAll({
    where: {
      UserId: id
    },
    include: [{
      model: models.NotificationDetail,
      required: false
    }, {
      model: models.User,
      required: false
    }, {
      model: models.Promotion,
      required: false
    }, {
      model: models.Bitacora,
      required: false
    }],
    order: [['createdAt', 'DESC']]
  })
}

module.exports = {
  createNotification,
  updateNotification,
  getNotifications
}
