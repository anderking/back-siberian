'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Motives', [
      {
        name: 'Irreparable',
        description: 'Totalmente Dañado',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Direccion Lejana',
        description: 'Imposible el traslado ',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Presupuesto Alto',
        description: 'Muy alto el presupuesto',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fuera de Garantia',
        description: 'Fuera de Garantia',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Incumplimiento de Politicas ',
        description: 'No cumple con las politicas de Garantia',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Motives', null, {})
  }
};
