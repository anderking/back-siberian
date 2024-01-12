'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nombre' + msg.G1
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Apellido' + msg.G1
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: msg.G8
        },
        notNull: {
          args: true,
          msg: 'Correo' + msg.G1
        },
        len: [5, 45]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Contraseña' + msg.G2
        },
        len: {
          args: [6, 200],
          msg: msg.G9
        }
      }
    },
    dni: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Cédula' + msg.G2
        },
        len: [5, 10],
        isInt: {
          args: true,
          msg: 'Cédula' + msg.G4
        }
      }
    },
    dniType: {
      type: DataTypes.ENUM,
      values: ['v', 'j', 'e']
    },
    imageUrl: DataTypes.TEXT,
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      isDate: true,
      isBefore: sequelize.NOW
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['Masculino', 'Femenino', 'Otro']
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted']
    },
    note: DataTypes.TEXT,
    androidId: DataTypes.STRING,
    emailNotification: DataTypes.BOOLEAN
  }, {
    modelName: 'user',
    sequelize
  })

  User.associate = function (models) {
    User.belongsTo(models.Role)
    User.hasMany(models.Location)
    User.hasMany(models.Phone)
    User.hasMany(models.LenderCalendar)
    User.hasMany(models.Revision)
    User.belongsToMany(models.Skill, {
      through: models.SkillsLenders
    })
    User.belongsToMany(models.Parameter, {
      through: models.UserParameters
    })
    User.hasMany(models.Notification)
  }

  return User
}
