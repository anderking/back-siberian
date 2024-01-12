'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        name: 'Personal',
        description: 'Tiene hijos, Vive Solo, ...',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Profesional',
        description: 'Carreras u ocupaciones, Medico, Ingeniero, Educador, Comerciante, Ama de Casa..',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hobbies',
        description: 'Bricolaje, Pintura, .... ',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {})
  }
};