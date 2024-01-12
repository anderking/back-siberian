'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bitacoras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
          defaultValue: 'revision',
          type: Sequelize.ENUM('revision', 'serviceOrder', 'revisionWaranty', 'serviceOrderWarranty')
      },
      eventType: {
        defaultValue: 'request',
        type: Sequelize.ENUM('request', 'requestEvaluation', 'execution', 'closure','budget','budgetEvaluation','schedule','warranty', 'completed')
      },
      RevisionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Revisions',
          key: 'id'
         // deferrable: Sequelize.Deferrable.NOT // in theory, doesn't check the constraint
        }
      },
      ServiceOrderId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ServiceOrders',
          key: 'id'
          // deferrable: Sequelize.Deferrable.NOT // in theory, doesn't check the constraint
        }
			},
      MotiveId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Motives',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
        defaultValue: 'pending',
        type: Sequelize.ENUM('pending', 'ready', 'cancel')
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
    /*. if the Sequelize.Deferrable.NOT  doesnt work, try this
    ALTER TABLE transaction
    ADD CONSTRAINT fkarc CHECK (
        ( (RevisionId IS NOT NULL) AND (SeriviceOrderId IS NULL) )
      OR ( (SeriviceOrderId IS NOT NULL) AND (RevisionId IS NULL) )
    );
    then(() => queryInterface.addConstraint('Bitacoras', ['RevisionId','SeriviceOrderId'], {
      type: 'check',
      where: {
        RevisionId: {
              [Sequelize.Op.gt]: 0
          }
      }
  }));*/

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bitacoras');
  }
};