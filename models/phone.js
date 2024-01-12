'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define('Phone', {
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Teléfono' + msg.G1
        },
        len: [10, 25]
      }
    },
    phoneType: {
      type: DataTypes.ENUM,
      values: ['Móvil', 'Trabajo', 'Casa', 'Otro']
    }
  },
  {
    modelName: 'phone',
    sequelize
  })

  Phone.associate = function (models) {
    Phone.belongsTo(models.User)
  }

  return Phone
}
