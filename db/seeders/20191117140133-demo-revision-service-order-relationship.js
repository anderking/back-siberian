'use strict'

const User = require('../../models').User
const VarietyDetail = require('../../models').VarietyDetail
const Location = require('../../models').Location
const Company = require('../../models').Company
const ServiceOrder = require('../../models').ServiceOrder

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()
    const varietyDetails = await VarietyDetail.findAll()
    const locations = await Location.findAll()
    const serviceOrders = await ServiceOrder.findAll()

    return queryInterface.bulkInsert('Revisions', [
      {
        description: 'Estoy presentado problemas con mi lavadora de nuevamente luego de la reparación',
        UserId: users[2].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        ServiceOrderId: serviceOrders[1].id,
        status: 'requested',
        isForGuarantee: true,
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Revisions', null, {})
  }
};
