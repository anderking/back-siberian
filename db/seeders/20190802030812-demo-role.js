'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'Gerente',
        description: 'Usuario que puede hacer todo',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Prestador',
        description: 'Usuario que puede chequear su calendario de trabajo',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Cliente',
        description: 'Usuario que solicita servicios',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Todo',
        description: 'Super Usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {})
  }
}
