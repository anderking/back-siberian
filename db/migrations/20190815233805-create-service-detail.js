'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ComponentId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Components',
					key: 'id'
				}
			},
      estimatedPrice: {
        type: Sequelize.FLOAT
      },
      estimatedWarrantyTime: {
        type: Sequelize.INTEGER
      },
      serviceType: {
        type: Sequelize.ENUM('Reparación', 'Mantenimiento', 'Construcción', 'Otros')
      },
      status: {
        defaultValue: 'active',
        type: Sequelize.ENUM('active', 'deleted')
      },
      note: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('ServiceDetails')
  }
};