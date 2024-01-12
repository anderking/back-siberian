'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
				unique: true,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.INTEGER
      },
      dniType: {
        type: Sequelize.ENUM('v', 'j', 'e')
			},
			RoleId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Roles',
					key: 'id'
				}
			},
      imageUrl: {
				type: Sequelize.TEXT,
				defaultValue: 'https://res.cloudinary.com/teamwatson/image/upload/v1574825758/avatardefault_qsy8aj.png'
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.ENUM('Masculino', 'Femenino', 'Otro')
      },
      status: {
        defaultValue: 'active',
        type: Sequelize.ENUM('active', 'inactive', 'deleted')
      },
      note: {
        type: Sequelize.TEXT
			},
      androidId: {
        type: Sequelize.STRING
			},
			emailNotification: {
				type: Sequelize.BOOLEAN,
				defaultValue: true
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
    return queryInterface.dropTable('Users')
  }
}
