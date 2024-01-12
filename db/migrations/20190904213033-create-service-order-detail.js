'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceOrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ServiceDetailId: {
				type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ServiceDetails',
          key: 'id'
        }
      },
      ServiceOrderId: {
				type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ServiceOrders',
          key: 'id'
        }
			},
      amount: {
        type: Sequelize.FLOAT(2)
      },
      duration: {
        type: Sequelize.INTEGER
      },
      status: {
        defaultValue: 'approved',
        type: Sequelize.ENUM('approved', 'rejected')
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
    return queryInterface.dropTable('ServiceOrderDetails')
  }
}