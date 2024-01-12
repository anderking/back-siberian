'use strict'

module.exports = (sequelize, DataTypes) => {
  const VarietyDetail = sequelize.define('VarietyDetail', {
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
    modelName: 'VarietyDetail',
    sequelize
  })

  VarietyDetail.associate = function (models) {
    VarietyDetail.belongsTo(models.VarietyEquipinfras)
    VarietyDetail.hasMany(models.Revision)
    VarietyDetail.belongsToMany(models.ServiceDetail, {
      through: 'ServiceDetailsVarietyDetails'
    })
  }
  return VarietyDetail
}
