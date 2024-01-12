'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
			},
			UserId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				}
			},
			PromotionId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Promotions',
					key: 'id'
				}
			},
			BitacoraId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Bitacoras',
					key: 'id'
				}
			},
			NotificationDetailId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'NotificationDetails',
					key: 'id'
				}
			},
      read: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Notifications');
  }
};