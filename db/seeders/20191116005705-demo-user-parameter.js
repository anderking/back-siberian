'use strict';

const models = require('../../models')
const User = models.User
const Parameter = models.Parameter

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()
    const parameters = await Parameter.findAll()
    return queryInterface.bulkInsert('UserParameters', [
      {
        UserId: users[0].id,
        ParameterId: parameters[0].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        UserId: users[1].id,
        ParameterId: parameters[0].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        UserId: users[1].id,
        ParameterId: parameters[1].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        UserId: users[0].id,
        ParameterId: parameters[2].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserParameters', null, {})
  }
};