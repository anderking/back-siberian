'use strict'
module.exports = (sequelize, DataTypes) => {
  const Variety = sequelize.define('Variety', {
    name: { type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 50]
      }
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {
    modelName: 'variety',
    sequelize
  })
  Variety.associate = function (models) {
    Variety.hasMany(models.VarietyEquipinfras)
  }
  return Variety
}
