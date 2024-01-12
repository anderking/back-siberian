'use strict'

module.exports = (sequelize, DataTypes) => {
  const AppFunction = sequelize.define('Function', {
    parentId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    iconM: DataTypes.STRING,
    urlIntranet: DataTypes.STRING,
    urlMobile: DataTypes.STRING
  }, {})

  AppFunction.associate = function (models) {
    AppFunction.hasMany(models.Function, { as: 'child', foreignKey: 'parentId' })
    AppFunction.belongsTo(models.Function, { as: 'parent', foreignKey: 'parentId' })
    AppFunction.belongsToMany(models.Role, { through: 'RolesFunctions' })
  }
  return AppFunction
}
