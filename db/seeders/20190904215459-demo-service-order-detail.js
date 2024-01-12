'use strict'

const ServiceDetail = require('../../models').ServiceDetail
const ServiceOrder = require('../../models').ServiceOrder

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const serviceDetails = await ServiceDetail.findAll()
    const serviceOrders = await ServiceOrder.findAll()

    return queryInterface.bulkInsert('ServiceOrderDetails', [
      {
        amount: 100,
        ServiceDetailId: serviceDetails[1].id,
        duration: 8,
        ServiceOrderId: serviceOrders[0].id,
        status: 'approved',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 1000,
        ServiceDetailId: serviceDetails[0].id,
        duration: 15,
        ServiceOrderId: serviceOrders[1].id,
        status: 'approved',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 1000,
        ServiceDetailId: serviceDetails[2].id,
        duration: 15,
        ServiceOrderId: serviceOrders[2].id,
        status: 'approved',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 1000,
        ServiceDetailId: serviceDetails[0].id,
        duration: 15,
        ServiceOrderId: serviceOrders[3].id,
        status: 'approved',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceOrderDetails', null, {})
  }
}
