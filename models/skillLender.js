'use strict'

module.exports = (sequelize, DataTypes) => {
  const SkillsLenders = sequelize.define('SkillsLenders', {
    experienceYears: DataTypes.INTEGER
  }, {})

  return SkillsLenders
}
