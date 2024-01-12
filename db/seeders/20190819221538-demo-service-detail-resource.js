'use strict'

const Resource = require('../../models').Resource
const ServiceDetail = require('../../models').ServiceDetail

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const resources = await Resource.findAll()
    const serviceDetails = await ServiceDetail.findAll()

    return queryInterface.bulkInsert('ServiceDetailResources', [
      {
        ServiceDetailId: serviceDetails[0].id,
        ResourceId: resources[0].id,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[0].id,
        ResourceId: resources[1].id,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceDetailResources', null, {})
  }
};
