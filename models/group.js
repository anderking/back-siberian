'use strict'
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
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
    sequelize,
    modelName: 'group'
  })
  Group.associate = function (models) {
    Group.hasMany(models.Parameter)
  }
  return Group
}
