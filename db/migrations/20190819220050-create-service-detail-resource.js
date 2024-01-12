'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceDetailResources', {
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
      ResourceId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Resources',
					key: 'id'
				}
			},
      quantity: {
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
    return queryInterface.dropTable('ServiceDetailResources')
  }
};