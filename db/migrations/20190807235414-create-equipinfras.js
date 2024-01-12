'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipinfras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      SubcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Subcategories',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.ENUM('E', 'I'),
        defaultValue: 'E'
      },
      imageUrl: {
				type: Sequelize.TEXT,
				defaultValue: 'https://res.cloudinary.com/teamwatson/image/upload/v1574783497/EN-BLANCO_ovel9g.png'
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
    return queryInterface.dropTable('Equipinfras');
  }
};