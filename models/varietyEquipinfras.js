'use strict'
module.exports = (sequelize, DataTypes) => {
  const VarietyEquipinfras = sequelize.define('VarietyEquipinfras', {
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {
    modelName: 'varietyEquipinfras',
    sequelize
  })
  VarietyEquipinfras.associate = function (models) {
    VarietyEquipinfras.belongsTo(models.Variety)
    VarietyEquipinfras.belongsTo(models.Equipinfras)
    VarietyEquipinfras.hasMany(models.VarietyDetail)
  }
  return VarietyEquipinfras
}
