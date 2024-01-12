'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Revisions',
      'PromotionId',
      Sequelize.INTEGER,
      {
        allowNull: true,
        references: {
        model: 'Promotions',
        key: 'id'
      }
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Revisions', 'PromotionId')
  }
};
