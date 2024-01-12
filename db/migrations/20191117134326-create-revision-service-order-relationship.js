'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Revisions',
      'ServiceOrderId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ServiceOrders',
          key: 'id'
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Revisions',
      'ServiceOrderId'
    )
  }
}
