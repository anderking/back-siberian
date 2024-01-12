'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nombre' + msg.G1
        }
      }
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    }
  }, {})

  Skill.associate = function (models) {
    Skill.belongsToMany(models.ServiceDetail, {
      through: 'SkillsServiceDetails'
    })
    Skill.belongsToMany(models.User, {
      through: models.SkillsLenders
    })
  }

  return Skill
}
