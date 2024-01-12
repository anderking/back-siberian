'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Dirección' + msg.G2
        },
        len: {
          args: [2, 90],
          msg: 'Dirección' + msg.G10 + ' 2 y 90 caracteres.'
        }
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 45],
          msg: 'Estado' + msg.G10 + ' 2 y 45 caracteres.'
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 45],
          msg: 'Ciudad' + msg.G10 + ' 2 y 45 caracteres.'
        }
      }
    },
    postalCode: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 10],
          msg: 'Código Postal' + msg.G10 + ' 2 y 10 caracteres.'
        }
      }
    },
    isLivingPlace: DataTypes.BOOLEAN
  },
  {
    modelName: 'location',
    sequelize
  })

  Location.associate = function (models) {
    Location.belongsTo(models.User)
  }

  return Location
}
