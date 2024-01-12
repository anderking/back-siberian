'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        defaultValue: 'revision',
        type: Sequelize.ENUM('revision', 'serviceOrderDetail')
      },
      RevisionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Revisions',
          key: 'id'
        }
      },
     ServiceOrderDetailId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ServiceOrderDetails',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE
      },
      turn: {
        defaultValue: 'morning',
        type: Sequelize.ENUM('morning', 'afternoon')
      },
      status: {
        defaultValue: 'booked',
        type: Sequelize.ENUM('booked', 'cancel','executed')
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
    return queryInterface.dropTable('Calendars');
  }
};