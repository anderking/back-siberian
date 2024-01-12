'use strict';

const Activity = require('../../models').Activity
const ServiceDetail = require('../../models').ServiceDetail

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const activities = await Activity.findAll()
    const serviceDetails = await ServiceDetail.findAll()

    return queryInterface.bulkInsert('ServiceDetailActivities', [
      {
        ServiceDetailId: serviceDetails[0].id,
        ActivityId: activities[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[0].id,
        ActivityId: activities[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[0].id,
        ActivityId: activities[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceDetailActivities', null, {})
  }
};
