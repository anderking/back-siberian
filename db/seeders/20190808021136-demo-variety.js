'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Varieties', [
      {
        name: 'LG',
        description: 'Tvs, aires acondicionados..',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Frigilux',
        description: 'Neveras, aires acondicionados..',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung',
        description: 'Electrodomesticos, telefonos, ...',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Varieties', null, {})
  }
};
