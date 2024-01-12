'use strict';
const models = require('../../models')
const Subcategory = models.Subcategory

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const subcategories = await Subcategory.findAll()
    return queryInterface.bulkInsert('Equipinfras', [
      {
        name: 'Lavadora',
        description: 'lavadora',
        SubcategoryId: subcategories[0].id,
        type: 'E',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783455/Lavadora_qwugqh.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nevera',
        description: 'neveras',
        SubcategoryId: subcategories[0].id,
        type: 'E',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783453/Nevera_ulhqwx.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aire Acondicionado',
        description: 'Aires Acondicionados',
        SubcategoryId: subcategories[0].id,
        type: 'E',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783455/Aire_t9miui.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Televisor ',
        description: 'Televisores',
        SubcategoryId: subcategories[1].id,
        type: 'E',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783456/televisor_lrmzvt.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Reproductor Radio ',
        description: 'Radios, Repoductores',
        SubcategoryId: subcategories[1].id,
        type: 'E',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783481/radio_vlm2hx.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Gotele Interiores ',
        description: 'Metodo de pintado "Gotele" en Interiores',
        SubcategoryId: subcategories[2].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783462/gotele_ufax2t.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Gotele Exteriores ',
        description: 'Metodo de pintado "Gotele" en Exteriores',
        SubcategoryId: subcategories[2].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783462/gotele_ufax2t.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Pintura Interiores ',
        description: 'Metodo de pintado "General" en Interiores',
        SubcategoryId: subcategories[3].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783466/pintar_j3qi2k.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Pintura Exteriores ',
        description: 'Metodo de pintado "General" en Exteriores',
        SubcategoryId: subcategories[3].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783466/pintar_j3qi2k.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Lavamanos',
        description: 'Lavamanos',
        SubcategoryId: subcategories[4].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783482/desatasco_manual_yrthms.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Desatasco mecánico',
        description: 'Lavamanos',
        SubcategoryId: subcategories[5].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783483/desatasco_mecanico_axm86s.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'PARED ',
        description: 'Pared de bloques...',
        SubcategoryId: subcategories[6].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783471/pared_xhcn05.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Piso',
        description: 'Pisos',
        SubcategoryId: subcategories[6].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783477/granito_cjtyjv.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Barras ',
        description: 'Barras de... ',
        SubcategoryId: subcategories[7].id,
        type: 'I',
        status: 'active',
        imageUrl:'https://res.cloudinary.com/teamwatson/image/upload/v1574783477/granito_cjtyjv.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Equipinfras', null, {})
  }
};
