'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SkillsLenders', {
			SkillId: {
				type: Sequelize.INTEGER,
				primaryKey: true
      },
      UserId: {
				type: Sequelize.INTEGER,
				primaryKey: true
			},
      experienceYears: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('SkillsLenders');
  }
};