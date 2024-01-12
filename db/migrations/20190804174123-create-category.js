'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        defaultValue: 'active',
        type: Sequelize.ENUM('active', 'inactive', 'deleted')
      },
      imageUrl: {
				type: Sequelize.TEXT,
				defaultValue: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783497/EN-BLANCO_ovel9g.png'
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
    return queryInterface.dropTable('Categories')
  }
}
