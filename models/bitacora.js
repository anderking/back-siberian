'use strict'
module.exports = (sequelize, DataTypes) => {
  const Bitacora = sequelize.define('Bitacora', {
    type: {
      type: DataTypes.ENUM,
      values: ['revision', 'serviceOrder', 'revisionWaranty', 'serviceOrderWarranty'],
      defaultValue: 'revision'
    },
    eventType: {
      type: DataTypes.ENUM,
      values: ['request', 'requestEvaluation', 'execution', 'closure', 'budget', 'budgetEvaluation', 'schedule', 'warranty', 'completed'],
      defaultValue: 'request'
    },
    description: DataTypes.STRING,
    date: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Debe introducir una Fecha'
        }
      },
      notEmpty: {
        args: true,
        msg: 'La fecha no puede ser Vacia'
      }/*,
      get: function () {
        if (this.getDataValue('date')) {
          return this.getDataValue('date').toISOString().slice(0, 10)
        }
      } */
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'ready', 'cancel'],
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    modelName: 'bitacora'
  })
  Bitacora.associate = function (models) {
    Bitacora.belongsTo(models.Motive)
    Bitacora.belongsTo(models.Revision)
    Bitacora.belongsTo(models.ServiceOrder)
  }
  return Bitacora
}
