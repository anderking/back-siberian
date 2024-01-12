'use strict'
module.exports = (sequelize, DataTypes) => {
  const UserParameters = sequelize.define('UserParameters', {
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {})
  return UserParameters
}
