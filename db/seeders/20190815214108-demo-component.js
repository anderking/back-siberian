'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Components', [
      {
        name: 'Motor',
        description: 'Motor de Lavadora.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Tarjeta Madre',
        description: 'Tarjeta Madre de Lavadora.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Pila',
        description: 'Pila de Lavadora.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Components', null, {})
  }
};
