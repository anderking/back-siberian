'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceOrderActivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      done: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
			},
			ServiceOrderId: {
				type: Sequelize.INTEGER,
        references: {
          model: 'ServiceOrders',
          key: 'id'
        }
			},
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ServiceOrderActivities')
  }
};