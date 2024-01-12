'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
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
    description: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 300],
          msg: 'Descripción' + msg.G10 + ' 3 y 300 caracteres.'
        }
      }
    },
    resourceType: {
      type: DataTypes.ENUM,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Tipo de Recurso' + msg.G1
        }
      },
      values: ['Herramienta', 'Equipo', 'Material', 'Humano']
    },
    price: DataTypes.FLOAT(2),
    measureUnit: {
      type: DataTypes.ENUM,
      values: ['Unidades', 'Kilogramos', 'Litros', 'Metros']
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    }
  }, {
    modelName: 'resource',
    sequelize
  })

  Resource.associate = function (models) {
    Resource.belongsToMany(models.ServiceDetail, { through: 'ServiceDetailResource' })
  }

  return Resource
}
