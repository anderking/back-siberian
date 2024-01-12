'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VarietyEquipinfras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VarietyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Varieties',
          key: 'id'
        }
      },
      EquipinfraId: {
       type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Equipinfras',
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
    return queryInterface.dropTable('VarietyEquipinfras');
  }
};

