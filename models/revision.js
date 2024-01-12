'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Revision = sequelize.define('Revision', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Descripción' + msg.G1
        },
        len: {
          args: [2, 300],
          msg: 'Descripción' + msg.G10 + ' 2 y 300 caracteres.'
        }
      }
    },
    imageRequestUrl: DataTypes.TEXT,
    price: DataTypes.FLOAT(2),
    note: DataTypes.TEXT,
    imageRevisionUrl: DataTypes.TEXT,
    numberWorkers: DataTypes.INTEGER,
    numberDays: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['requested', 'approved', 'rejected', 'diagnosticated', 'cancelled', 'finalized', 'irreparable']
    },
    isForGuarantee: DataTypes.BOOLEAN
  }, {
    modelName: 'revision',
    sequelize
  })

  Revision.associate = function (models) {
    Revision.belongsTo(models.User)
    Revision.belongsTo(models.VarietyDetail)
    Revision.belongsTo(models.Location)
    Revision.hasOne(models.ServiceOrder)
    Revision.belongsTo(models.ServiceOrder)
    Revision.hasMany(models.Calendar)
    Revision.hasMany(models.Bitacora)
    Revision.belongsTo(models.Promotion)
  }

  return Revision
}
