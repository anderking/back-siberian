'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nombre' + msg.G1
        },
        len: {
          args: [2, 45],
          msg: 'Nombre' + msg.G10 + ' 2 y 45 caracteres.'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 300],
          msg: 'Descripción' + msg.G10 + ' 3 y 300 caracteres.'
        }
      }
    },
    estimatedTime: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Tiempo estimado' + msg.G4
        }
      }
    },
    difficultyDegree: {
      type: DataTypes.ENUM,
      values: ['Alta', 'Mediana', 'Baja']
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    }
  }, {
    modelName: 'activity',
    sequelize
  })

  Activity.associate = function (models) {
    Activity.belongsToMany(models.ServiceDetail, { through: 'ServiceDetailActivities' })
  }

  return Activity
}
