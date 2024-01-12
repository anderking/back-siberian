'use strict'

const User = require('../../models').User

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()

    return queryInterface.bulkInsert('Locations', [
      {
        address: 'UrbTarabana II, Sector II, Calle 16',
        state: 'Lara',
        city: 'Cabudare',
        postalCode: '3023',
        isLivingPlace: true,
        UserId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Urb Santa Isabe la Playa, Calle 7 entre 1 y 2',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: false,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Carrera 15 entre calle 50 y 51',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: true,
        UserId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'UrbTarabana II, Sector II, Calle 16',
        state: 'Lara',
        city: 'Cabudare',
        postalCode: '3023',
        isLivingPlace: true,
        UserId: users[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Urb Santa Isabe la Playa, Calle 7 entre 1 y 2',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: false,
        UserId: users[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Carrera 15 entre calle 50 y 51',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: true,
        UserId: users[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'UrbTarabana II, Sector II, Calle 16',
        state: 'Lara',
        city: 'Cabudare',
        postalCode: '3023',
        isLivingPlace: true,
        UserId: users[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Urb Santa Isabe la Playa, Calle 7 entre 1 y 2',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: false,
        UserId: users[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Carrera 15 entre calle 50 y 51',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: true,
        UserId: users[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'UrbTarabana II, Sector II, Calle 16',
        state: 'Lara',
        city: 'Cabudare',
        postalCode: '3023',
        isLivingPlace: true,
        UserId: users[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Urb Santa Isabe la Playa, Calle 7 entre 1 y 2',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: false,
        UserId: users[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Carrera 15 entre calle 50 y 51',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: true,
        UserId: users[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'UrbTarabana II, Sector II, Calle 16',
        state: 'Lara',
        city: 'Cabudare',
        postalCode: '3023',
        isLivingPlace: true,
        UserId: users[12].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Urb Santa Isabe la Playa, Calle 7 entre 1 y 2',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: false,
        UserId: users[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Carrera 15 entre calle 50 y 51',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: true,
        UserId: users[14].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'UrbTarabana II, Sector II, Calle 16',
        state: 'Lara',
        city: 'Cabudare',
        postalCode: '3023',
        isLivingPlace: true,
        UserId: users[15].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Urb Santa Isabe la Playa, Calle 7 entre 1 y 2',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: false,
        UserId: users[16].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        address: 'Carrera 15 entre calle 50 y 51',
        state: 'Lara',
        city: 'Barquisimeto',
        postalCode: '3001',
        isLivingPlace: true,
        UserId: users[17].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {})
  }
}

18