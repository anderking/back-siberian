'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      resourceType: {
        type: Sequelize.ENUM('Herramienta', 'Equipo', 'Material', 'Humano')
      },
      price: {
        type: Sequelize.FLOAT(2)
      },
      measureUnit: {
        type: Sequelize.ENUM('Unidades', 'Kilogramos', 'Litros', 'Metros')
      },
      status: {
        defaultValue: 'active',
        type: Sequelize.ENUM('active', 'deleted')
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
    return queryInterface.dropTable('Resources')
  }
};