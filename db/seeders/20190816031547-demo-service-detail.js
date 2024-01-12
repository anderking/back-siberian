'use strict'

const Component = require('../../models').Component

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const components = await Component.findAll()

    return queryInterface.bulkInsert('ServiceDetails', [
      {
        name: 'Reparación de motor',
        note: 'Reparación de motor de lavadora.',
        ComponentId: components[0].id,
        estimatedPrice: 1000,
        estimatedWarrantyTime: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        serviceType: 'Reparación'
      }, {
        name: 'Mantenimiento de motor',
        note: 'Mantenimiento de motor de lavadora.',
        ComponentId: components[0].id,
        estimatedPrice: 800,
        estimatedWarrantyTime: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        serviceType: 'Mantenimiento'
      }, {
        name: 'Reparación de Tarjeta Madre',
        note: 'Reparación de Tarjeta Madre.',
        ComponentId: components[1].id,
        estimatedPrice: 900,
        estimatedWarrantyTime: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        serviceType: 'Reparación'
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceDetails', null, {})
  }
};
