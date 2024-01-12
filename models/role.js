'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
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
      values: ['active', 'inactive', 'deleted']
    }
  },
  {
    modelName: 'role',
    sequelize
  })

  Role.associate = function (models) {
    Role.hasMany(models.User)
    Role.belongsToMany(models.Function, { through: 'RolesFunctions' })
  }

  return Role
}
