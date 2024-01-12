'use strict'
module.exports = (sequelize, DataTypes) => {
  const PromotionParameters = sequelize.define('PromotionParameters', {
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {})
  return PromotionParameters
}
