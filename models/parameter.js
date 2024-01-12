'use strict'
module.exports = (sequelize, DataTypes) => {
  const Parameter = sequelize.define('Parameter', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {
    sequelize,
    modelName: 'parameter'
  })
  Parameter.associate = function (models) {
    Parameter.belongsTo(models.Group)
    Parameter.belongsToMany(models.User, {
      through: models.UserParameters
    })
    Parameter.belongsToMany(models.Promotion, {
      through: models.PromotionParameters
    })
  }
  return Parameter
}
