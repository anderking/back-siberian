'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Electrodomésticos',
        description: 'Lavadora, Microondas, Neveras...',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783499/Electrodomesticos_k0coic.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pintura',
        description: 'Interiores, Exteriores',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783497/Pintura_pvqcdo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Plomería',
        description: 'Desatascos, Tuberias de interiores y exteriores',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783498/Plomeria_ih6oj0.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Albañilería',
        description: 'Paredes, Pisos de interiores y exteriores',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783498/Alba%C3%B1ileria_tx4flj.png',
        createdAt: new Date(),
        updatedAt: new Date()
			},
			{
        name: 'Carpintería',
        description: 'Paredes, muebles, estantería',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783499/Carpinteria_in3m3d.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
			{
        name: 'Limpieza',
        description: 'Interiores, exteriores',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783497/Limpieza_eby3o3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
			{
        name: 'Refrigeración',
        description: 'Cava cuarto, heladeras',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783496/Refrigeracion_y4meoi.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
			{
        name: 'Electricidad',
        description: 'Instalaciones, cerco eléctrico',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783498/Electricidad_rsfgnu.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
			{
        name: 'Limpiacristales',
        description: 'Aereo, ventanas panoramicas',
        status: 'active',
        imageUrl: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783497/limpiacristal_gfjbvq.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
}
