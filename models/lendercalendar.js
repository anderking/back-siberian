'use strict'
module.exports = (sequelize, DataTypes) => {
  const LenderCalendar = sequelize.define('LenderCalendar', {
    status: {
      type: DataTypes.ENUM,
      values: ['booked', 'cancel', 'executed'],
      defaultValue: 'booked'
    }
  }, {
    sequelize,
    modelName: 'lenderCalendar'
  })
  LenderCalendar.associate = function (models) {
    LenderCalendar.belongsTo(models.Calendar)
    LenderCalendar.belongsTo(models.User)
  }
  return LenderCalendar
}
