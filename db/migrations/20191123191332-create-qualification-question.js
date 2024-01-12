'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QualificationQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      QualificationId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Qualifications',
					key: 'id'
				}
      },
      QuestionId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Questions',
					key: 'id'
				}
			},
      points: {
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
    return queryInterface.dropTable('QualificationQuestions');
  }
};