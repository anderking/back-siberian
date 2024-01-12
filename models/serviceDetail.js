'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const ServiceDetail = sequelize.define('ServiceDetail', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nombre' + msg.G1
        },
        len: {
          args: [2, 45],
          msg: 'Nombre' + msg.G10 + ' 2 y 45 caracteres.'
        }
      }
    },
    estimatedPrice: DataTypes.FLOAT(2),
    estimatedWarrantyTime: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Tiempo Estimado de Garantía' + msg.G4
        }
      }
    },
    serviceType: {
      type: DataTypes.ENUM,
      values: ['Reparación', 'Mantenimiento', 'Construcción', 'Otros'],
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Tipo de Servicio' + msg.G1
        }
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    },
    note: DataTypes.TEXT
  }, {
    modelName: 'serviceDetail',
    sequelize
  })

  ServiceDetail.associate = function (models) {
    ServiceDetail.belongsTo(models.Component)
    ServiceDetail.hasMany(models.ServiceOrderDetail)
    ServiceDetail.belongsToMany(models.Activity, { through: 'ServiceDetailActivities' })
    ServiceDetail.belongsToMany(models.Policy, { through: 'ServiceDetailPolicies' })
    ServiceDetail.belongsToMany(models.Resource, { through: 'ServiceDetailResource' })
    ServiceDetail.belongsToMany(models.Skill, { through: 'SkillsServiceDetails' })
    ServiceDetail.belongsToMany(models.VarietyDetail, { through: 'ServiceDetailsVarietyDetails' })
  }

  return ServiceDetail
}
