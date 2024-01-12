'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const ServiceOrderDetail = sequelize.define('ServiceOrderDetail', {
    amount: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Monto' + msg.G1
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Duración' + msg.G1
        },
        isInt: {
          args: true,
          msg: 'Duración' + msg.G4
        }
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ['approved', 'rejected']
    }
  }, {
    modelName: 'serviceOrderDetail',
    sequelize
  })

  ServiceOrderDetail.associate = function (models) {
    ServiceOrderDetail.belongsTo(models.ServiceOrder)
    ServiceOrderDetail.belongsTo(models.ServiceDetail)
    ServiceOrderDetail.hasMany(models.Calendar)
  }

  return ServiceOrderDetail
}
