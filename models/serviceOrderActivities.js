'use strict'

module.exports = (sequelize, DataTypes) => {
  const ServiceOrderActivities = sequelize.define('ServiceOrderActivities', {
		done: DataTypes.BOOLEAN,
		name: DataTypes.STRING
	}, {})
	
  ServiceOrderActivities.associate = function(models) {
    ServiceOrderActivities.belongsTo(models.ServiceOrder)
	}
	
  return ServiceOrderActivities
};