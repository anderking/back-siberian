'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Resources', [
      {
        name: 'Destornillador de Estria',
        description: 'Destornillador de Estria, marca black & decker.',
        resourceType: 'Material',
        price: 10000,
        measureUnit: 'Unidades',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Martillo',
        description: 'Martillos marca tramontina.',
        resourceType: 'Material',
        price: 3000,
        measureUnit: 'Unidades',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Compresor de aire',
        description: 'Compresor De Aire Apollo. 1.5 Hp. 24 Litros.',
        resourceType: 'Equipo',
        price: 100000,
        measureUnit: 'Unidades',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Resources', null, {})
  }
};
