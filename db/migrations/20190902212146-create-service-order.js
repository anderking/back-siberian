'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ServiceOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        unique: true,
        type: Sequelize.STRING
      },
      RevisionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Revisions',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.FLOAT(2)
      },
      discount: {
        type: Sequelize.FLOAT(2)
      },
      warrantyTime: {
        type: Sequelize.INTEGER
      },
      reason: {
        type: Sequelize.TEXT
      },
      imageClaimUrl: {
        type: Sequelize.TEXT
      },
      status: {
        defaultValue: 'budgeted',
        type: Sequelize.ENUM('budgeted', 'approved', 'rejected', 'cancelled', 'finalized', 'warranty', 'completed')
      },
      imagePaymentUrl: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ServiceOrders');
  }
};