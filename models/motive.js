'use strict'
module.exports = (sequelize, DataTypes) => {
  const Motive = sequelize.define('Motive', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {
    modelName: 'motive',
    sequelize
  })
  Motive.associate = function (models) {
    Motive.hasMany(models.Bitacora)
  }
  return Motive
}
