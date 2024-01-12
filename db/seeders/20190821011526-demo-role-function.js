'use strict'
const models = require('../../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = await models.Role.findAll()
		const functions = await models.Function.findAll()

		let a = []
		for (let i = 0; i < functions.length; i++ ) {
			a.push({
				RoleId: roles[3].id,
        FunctionId: i + 1,
        createdAt: new Date(),
        updatedAt: new Date()
			})
		}

    return queryInterface.bulkInsert('RolesFunctions', [
      {
        RoleId: roles[0].id,
        FunctionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[0].id,
        FunctionId: 41,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[1].id,
        FunctionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        RoleId: roles[2].id,
        FunctionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      }, ...a], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RolesFunctions', null, {})
  }
};
