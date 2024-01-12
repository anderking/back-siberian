'use strict'

const VarietyEquipinfras = require('../../models').VarietyEquipinfras

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const varietyEquipinfras = await VarietyEquipinfras.findAll()
  return queryInterface.bulkInsert('VarietyDetails', [
      {
        VarietyEquipinfraId: varietyEquipinfras[0].id,
        name:'Turbodrum Fuzzy Logic',
        description:'12kg',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyEquipinfraId: varietyEquipinfras[0].id,
        name:'Turbodrum Fuzzy Logic',
        description:'6Kg',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyEquipinfraId: varietyEquipinfras[1].id,
        name:' InstaView Door-in-Door',
        description:'31 cu.ft. - GM84SXDB',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyEquipinfraId: varietyEquipinfras[1].id,
        name:'InstaView Door-in-Door',
        description:'26cu.ft - LS74SXS',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyEquipinfraId: varietyEquipinfras[2].id,
        name:'55SK8500PDA TV Super UHD, 4K',
        description:'55" ThinQ AI',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      },
      {
        VarietyEquipinfraId: varietyEquipinfras[2].id,
        name:'50UK6300PSB TV UHD, 4K',
        description:' 50" ThinQ AI',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'active'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VarietyDetails', null, {})
  }
};


