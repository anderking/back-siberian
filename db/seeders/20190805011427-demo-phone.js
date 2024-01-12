'use strict'

const User = require('../../models').User

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()

    return queryInterface.bulkInsert('Phones', [
      {
        number: '+584140710841',
        phoneType: 'Móvil',
        UserId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        number: '+582512619576',
        phoneType: 'Casa',
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        number: '+584145293571',
        phoneType: 'Trabajo',
        UserId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Phones', null, {})
  }
}
