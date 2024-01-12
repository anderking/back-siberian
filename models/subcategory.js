'use strict'
module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 300]
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active' }
  }, {
    modelName: 'subcategory',
    sequelize
  })

  Subcategory.associate = function (models) {
    Subcategory.belongsTo(models.Category)
    Subcategory.hasMany(models.Equipinfras)
    Subcategory.hasMany(models.Promotion)
  }
  return Subcategory
}
