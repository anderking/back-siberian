'use strict'

module.exports = (sequelize, DataTypes) => {
  const Qualification = sequelize.define('Qualification', {
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'deleted']
    },
    typeQualification: {
      type: DataTypes.ENUM,
      values: ['user', 'serviceDetail']
    }
  }, {
    hooks: {
      beforeValidate: (qualification, options) => {
        (qualification.UserId) ? qualification.typeQualification = 'user' : qualification.typeQualification = 'serviceDetail'
      }
    },
    modelName: 'qualification',
    sequelize
  })

  Qualification.associate = function (models) {
    Qualification.belongsTo(models.User, { as: 'Author', foreignKey: 'AuthorId' })
    Qualification.belongsTo(models.User, { as: 'User', foreignKey: 'UserId' })
    Qualification.belongsTo(models.ServiceDetail)
    Qualification.belongsTo(models.ServiceOrderDetail)
    Qualification.belongsToMany(models.Question, { through: 'QualificationQuestion' })
  }

  return Qualification
}
