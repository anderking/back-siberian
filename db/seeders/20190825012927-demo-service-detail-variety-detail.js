'use strict'

const VarietyDetail = require('../../models').VarietyDetail
const ServiceDetail = require('../../models').ServiceDetail

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const varietyDetails = await VarietyDetail.findAll()
    const serviceDetails = await ServiceDetail.findAll()

    return queryInterface.bulkInsert('ServiceDetailsVarietyDetails', [
      {
        ServiceDetailId: serviceDetails[0].id,
        VarietyDetailId: varietyDetails[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[0].id,
        VarietyDetailId: varietyDetails[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[1].id,
        VarietyDetailId: varietyDetails[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceDetailsVarietyDetails', null, {})
  }
};
