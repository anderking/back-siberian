'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Revisions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      VarietyDetailId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'VarietyDetails',
          key: 'id'
        }
      },
      LocationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Locations',
          key: 'id'
        }
      },
      imageRequestUrl: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.FLOAT(2)
      },
      note: {
        type: Sequelize.TEXT
      },
      imageRevisionUrl: {
        type: Sequelize.TEXT
      },
      numberWorkers: {
        type: Sequelize.INTEGER
      },
      numberDays: {
        type: Sequelize.INTEGER
      },
      status: {
        defaultValue: 'requested',
        type: Sequelize.ENUM('requested', 'approved', 'rejected', 'diagnosticated', 'cancelled', 'finalized', 'irreparable')
      },
      isForGuarantee: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Revisions')
  }
}