'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PromotionParameters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ParameterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Parameters',
          key: 'id'
        }
      },
      PromotionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Promotions',
          key: 'id'
        }
      },
      status: {
        defaultValue: 'active',
        type: Sequelize.ENUM('active', 'inactive', 'deleted')
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
    return queryInterface.dropTable('PromotionParameters');
  }
};