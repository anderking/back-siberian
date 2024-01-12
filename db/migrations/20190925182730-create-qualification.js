'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Qualifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AuthorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      ServiceDetailId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ServiceDetails',
          key: 'id'
        }
      },
      ServiceOrderDetailId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ServiceOrderDetails',
          key: 'id'
        }
      },
      status: {
        defaultValue: 'active',
        type: Sequelize.ENUM('active', 'deleted')
      },
      typeQualification: {
        type: Sequelize.ENUM('user', 'serviceDetail')
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
    return queryInterface.dropTable('Qualifications')
  }
}