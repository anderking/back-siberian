'use strict'

const Policy = require('../../models').Policy
const ServiceDetail = require('../../models').ServiceDetail

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const policies = await Policy.findAll()
    const serviceDetails = await ServiceDetail.findAll()

    return queryInterface.bulkInsert('ServiceDetailPolicies', [
      {
        ServiceDetailId: serviceDetails[0].id,
        PolicyId: policies[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[0].id,
        PolicyId: policies[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[1].id,
        PolicyId: policies[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceDetailPolicies', null, {})
  }
};
