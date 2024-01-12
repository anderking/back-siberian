'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const QualificationQuestion = sequelize.define('QualificationQuestion', {
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Puntuación' + msg.G1
        },
        max: {
          args: 5,
          msg: 'Puntuación debe ser menor o igual a 5.'
        }
      }
    }
  }, {
    modelName: 'qualificationQuestion',
    sequelize
  })

  QualificationQuestion.associate = function (models) {
    QualificationQuestion.belongsTo(models.Qualification)
    QualificationQuestion.belongsTo(models.Question)
  }

  return QualificationQuestion
}
