'use strict'

const models = require('../../models')
const Category = models.Category

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await Category.findAll()

    return queryInterface.bulkInsert('Subcategories', [
      {
        name: 'Línea Blanca',
        description: 'Neveras, Microondas,Aires Aconcicionados...',
        CategoryId: categories[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }, {
        name: 'Línea Marrón',
        description: 'Televisor, Reproductor de Audio...',
        CategoryId: categories[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }, {
        name: 'Gotelé',
        description: 'Gotele exterior, Gotele interior',
        CategoryId: categories[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }, {
        name: 'General',
        description: 'interior, exterior',
        CategoryId: categories[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }, {
        name: 'Tuberías',
        description: 'Lavamanos, Lavaplatos, Inodoros, Duchas',
        CategoryId: categories[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }, {
        name: 'Desatascos',
        description: '',
        CategoryId: categories[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }, {
        name: 'Macro',
        description: 'Paredes, Techos, Pisos...',
        CategoryId: categories[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }, {
        name: 'Micro',
        description: 'Barras...',
        CategoryId: categories[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subcategories', null, {})
  }
}
