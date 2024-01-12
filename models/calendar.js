'use strict'
module.exports = (sequelize, DataTypes) => {
  const Calendar = sequelize.define('Calendar', {
    type: {
      type: DataTypes.ENUM,
      values: ['revision', 'serviceOrderDetail'],
      defaultValue: 'revision'
    },
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
      },
      get: function () {
        if (this.getDataValue('date')) {
          return this.getDataValue('date').toISOString().slice(0, 10)
        }
      }
    },
    turn: {
      type: DataTypes.ENUM,
      values: ['morning', 'afternoon'],
      defaultValue: 'morning'
    },
    status: {
      type: DataTypes.ENUM,
      values: ['booked', 'cancel', 'executed'],
      defaultValue: 'booked'
    }
  }, {
    sequelize,
    modelName: 'calendar'
  })
  Calendar.associate = function (models) {
    Calendar.hasMany(models.LenderCalendar)
    Calendar.belongsTo(models.ServiceOrderDetail)
    Calendar.belongsTo(models.Revision)
  }
  return Calendar
}
