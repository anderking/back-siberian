'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Policy = sequelize.define('Policy', {
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
    description: DataTypes.TEXT,
    actionPlan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Plan de Acción ' + msg.G1
        }
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    }
  }, {
    modelName: 'policy',
    sequelize
  })

  Policy.associate = function (models) {
    Policy.belongsToMany(models.ServiceDetail, { through: 'ServiceDetailPolicies' })
  }

  return Policy
}
