'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      rif: {
        type: Sequelize.STRING
      },
      aboutUs: {
        type: Sequelize.STRING(2000)
      },
      vision: {
        type: Sequelize.STRING(2000)
      },
      mision: {
        type: Sequelize.STRING(2000)
      },
      imageUrl: {
				type: Sequelize.TEXT,
				defaultValue: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783497/EN-BLANCO_ovel9g.png'
      },
      phoneOne: {
        type: Sequelize.STRING
      },
      phoneTwo: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      revisionPrice: {
        type: Sequelize.FLOAT(2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies')
  }
}