'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    enquire: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Pregunta' + msg.G1
        }
      }
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    },
    kind: {
      type: DataTypes.ENUM,
      values: ['cliente', 'prestador', 'servicio'],
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Tipo' + msg.G1
        }
      }
    }
  }, {
    modelName: 'question',
    sequelize
  })

  Question.associate = function (models) {
    Question.belongsToMany(models.Qualification, { through: 'QualificationQuestion' })
  }

  return Question
}
