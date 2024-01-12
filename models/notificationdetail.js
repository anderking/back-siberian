'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const NotificationDetail = sequelize.define('NotificationDetail', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nombre' + msg.G1
        }
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted']
    }
  }, {})
  NotificationDetail.associate = function (models) {
    NotificationDetail.hasMany(models.Notification)
  }
  return NotificationDetail
}
