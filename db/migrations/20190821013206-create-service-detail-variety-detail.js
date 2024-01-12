'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceDetailsVarietyDetails', {
      VarietyDetailId: {
				type: Sequelize.INTEGER,
				primaryKey: true
      },
      ServiceDetailId: {
				type: Sequelize.INTEGER,
				primaryKey: true
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
    return queryInterface.dropTable('ServiceDetailsVarietyDetails')
  }
};
