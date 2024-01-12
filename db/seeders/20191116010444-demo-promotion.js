'use strict';

const models = require('../../models')
const Equipinfras = models.Equipinfras
const Subcategory = models.Subcategory

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const equipinfras = await Equipinfras.findAll()
    const subcategory = await Subcategory.findAll()

    return queryInterface.bulkInsert('Promotions', [
      {
        name: 'Diciembre a Cocinar',
        description: 'Descuento en Reparacion y Mantienimiento de Cocinas',
        type: 'target',
        EquipinfraId: equipinfras[3].id,
        percentDiscount: 0.1,
        status: 'active',
        dateStart: '2019-12-01',
        dateEnd: '2019-12-31',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Casita Bonita',
        description: 'Descuento en repacion y Mantenimiento de Paredes',
        type: 'target',
        EquipinfraId: equipinfras[11].id,
        percentDiscount: 0.1,
        status: 'active',
        dateStart: '2019-12-01',
        dateEnd: '2019-12-31',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Frescura a tu altura',
        description: 'Descuento en repacion y Mantenimiento de Aires Acondicionados',
        type: 'target',
        EquipinfraId: equipinfras[2].id,
        status: 'active',
        percentDiscount: 0.1,
        dateStart: '2019-12-01',
        dateEnd: '2019-12-31',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A pintar se ha dicho',
        description: 'Descuento en pintura de interiores',
        type: 'target',
        EquipinfraId: equipinfras[6].id,
        percentDiscount: 0.1,
        status: 'active',
        dateStart: '2019-12-01',
        dateEnd: '2019-12-31',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mejora tu linea BLanca',
        description: 'Descuento en Reparacion y Mantienimiento en Linea Blanca',
        type: 'generic',
        SubcategoryId: subcategory[0].id,
        percentDiscount: 0.15,
        status: 'active',
        dateStart: '2019-12-01',
        dateEnd: '2019-12-31',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reconstruye a lo grande',
        description: 'Descuento en Construcciones Macros',
        type: 'generic',
        SubcategoryId: subcategory[7].id,
        percentDiscount: 0.1,
        status: 'active',
        dateStart: '2019-12-01',
        dateEnd: '2019-12-31',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Promotions', null, {})
  }
};