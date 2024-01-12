'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Functions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parentId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Functions',
					key: 'id'
				}
      },
      title: {
        type: Sequelize.STRING
			},
			description: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      iconM: {
        type: Sequelize.STRING
			},
			urlIntranet: {
        type: Sequelize.STRING
			},
			urlMobile: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Functions');
  }
};