'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Promotions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        defaultValue: 'generic',
        type: Sequelize.ENUM('generic', 'target')
      },
      EquipinfraId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Equipinfras',
          key: 'id'
        }
      },
      SubcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Subcategories',
          key: 'id'
        }
      },
      percentDiscount: {
        type: Sequelize.FLOAT
      },
      dateStart: {
        type: Sequelize.DATE
      },
      dateEnd: {
        type: Sequelize.DATE
      },
      imageUrl: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Promotions');
  }
};