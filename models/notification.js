'use strict'

module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    read: DataTypes.BOOLEAN
  }, {})
  Notification.associate = function (models) {
    Notification.belongsTo(models.NotificationDetail)
    Notification.belongsTo(models.User)
    Notification.belongsTo(models.Promotion)
    Notification.belongsTo(models.Bitacora)
  }
  return Notification
}
