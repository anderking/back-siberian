'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const ServiceOrder = sequelize.define('ServiceOrder', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Código' + msg.G2
        }
      }
    },
    amount: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Monto' + msg.G2
        }
      }
    },
    discount: DataTypes.FLOAT(2),
    warrantyTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Tiempo de Garantía' + msg.G2
        },
        isInt: {
          args: true,
          msg: 'Tiempo de Garantía' + msg.G4
        }
      }
    },
    reason: DataTypes.TEXT,
    imageClaimUrl: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM,
      values: ['budgeted', 'approved', 'rejected', 'cancelled', 'finalized', 'warranty', 'completed']
    },
    imagePaymentUrl: DataTypes.TEXT
  }, {
    hooks: {
      beforeValidate: (serviceOrder, options) => {
        serviceOrder.code = 'SIB' + Date.now().toString()
      }
    },
    modelName: 'serviceOrder',
    sequelize
  })

  ServiceOrder.associate = function (models) {
    ServiceOrder.belongsTo(models.Revision)
    ServiceOrder.hasMany(models.ServiceOrderDetail)
		ServiceOrder.hasMany(models.Bitacora)
		ServiceOrder.hasMany(models.ServiceOrderActivities)
  }

  return ServiceOrder
}
