'use strict'
module.exports = (sequelize, DataTypes) => {
  const Equipinfras = sequelize.define('Equipinfras', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    description: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    type: {
      type: DataTypes.ENUM,
      values: ['E', 'I'],
      defaultValue: 'E'
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {
    modelName: 'equipinfras',
    sequelize
  })
  Equipinfras.associate = function (models) {
    Equipinfras.hasMany(models.VarietyEquipinfras)
    Equipinfras.belongsTo(models.Subcategory)
    Equipinfras.hasMany(models.Promotion)
  }
  return Equipinfras
}
