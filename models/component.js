'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define('Component', {
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
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    }
  }, {
    modelName: 'component',
    sequelize
  })

  Component.associate = function (models) {
    Component.hasMany(models.ServiceDetail)
  }

  return Component
}
