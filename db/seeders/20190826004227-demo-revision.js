'use strict'

const User = require('../../models').User
const Role = require('../../models').Role
const VarietyDetail = require('../../models').VarietyDetail
const Location = require('../../models').Location
const Company = require('../../models').Company

module.exports = {
  up: async (queryInterface, Sequelize) => {
		const role = await Role.findOne({
			where: {
				name: 'Cliente'
			}
		})
    const users = await User.findAll({
			where: {
				RoleId: role.id
			}
		})

    const varietyDetails = await VarietyDetail.findAll()
    const locations = await Location.findAll()

    return queryInterface.bulkInsert('Revisions', [
      {
        description: 'Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[0].id,
        price: 30000,
        status: 'requested',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        price: 30000,
        status: 'approved',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora de nuevo',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        status: 'rejected',
        price: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora de mi mama',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[0].id,
        price: 30000,
        status: 'diagnosticated',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        price: 30000,
        status: 'cancelled',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        price: 30000,
        status: 'finalized',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        price: 30000,
        status: 'irreparable',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[0].id,
        price: 30000,
        status: 'finalized',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        price: 30000,
        status: 'finalized',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Estoy presentado problemas con mi lavadora de nuevo',
        UserId: users[0].id,
        VarietyDetailId: varietyDetails[0].id,
        LocationId: locations[1].id,
        status: 'finalized',
        price: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Revisions', null, {})
  }
};
