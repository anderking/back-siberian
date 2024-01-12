'use strict'
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    },
    imageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'category'
  })
  Category.associate = function (models) {
    Category.hasMany(models.Subcategory)
  }
  return Category
}
