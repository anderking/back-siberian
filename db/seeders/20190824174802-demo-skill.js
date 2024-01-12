'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Skills', [
      {
        name: 'Pintor',
        description: 'Sabe pintar paredes, techos y rodapies.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Técnico',
        description: 'Repara aparatos eléctricos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Albañil',
        description: 'Todo tipo de construcciones con bloques y cemento.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Todero',
        description: 'Hace de todo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {})
  }
}
