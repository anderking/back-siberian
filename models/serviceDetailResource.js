'use strict'

module.exports = (sequelize, DataTypes) => {
  const ServiceDetailResource = sequelize.define('ServiceDetailResource', {
    quantity: DataTypes.FLOAT(2)
  }, {
    modelName: 'serviceDetailResource',
    sequelize
  })

  ServiceDetailResource.associate = function (models) {
    ServiceDetailResource.belongsTo(models.Resource)
    ServiceDetailResource.belongsTo(models.ServiceDetail)
  }

  return ServiceDetailResource
}
