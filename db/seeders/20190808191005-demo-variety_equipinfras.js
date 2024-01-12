'use strict'

const models = require('../../models')
const Variety = models.Variety
const Equipinfras = models.Equipinfras

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const variety = await Variety.findAll()
    const equipinfras = await Equipinfras.findAll()

    return queryInterface.bulkInsert('VarietyEquipinfras', [
      {
        VarietyId: variety[0].id,
        EquipinfraId: equipinfras[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyId: variety[0].id,
        EquipinfraId: equipinfras[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyId: variety[1].id,
        EquipinfraId: equipinfras[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyId: variety[1].id,
        EquipinfraId: equipinfras[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VarietyEquipinfras', null, {})
  }
};


