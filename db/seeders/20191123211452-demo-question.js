'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        enquire: '¿Que le pareció el servicio ofrecido por el prestador?',
        description: 'Valida el servicio ofrecido por el prestador',
        kind: 'prestador',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        enquire: '¿Que le pareció el cliente?',
        description: 'Valida la actitud del cliente.',
        kind: 'cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        enquire: '¿Que le pareció el servicio en general?',
        description: 'Valida el servicio prestado.',
        kind: 'servicio',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {})
  }
};
