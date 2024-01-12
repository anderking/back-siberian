'use strict'
module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define('Promotion', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM,
      values: ['generic', 'target'],
      defaultValue: 'generic'
    },
    percentDiscount: DataTypes.FLOAT,
    dateStart: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Debe introducir una Fecha'
        }
      },
      notEmpty: {
        args: true,
        msg: 'La fecha no puede ser Vacia'
      },
      get: function () {
        if (this.getDataValue('dateStart')) {
          return this.getDataValue('dateStart').toISOString().slice(0, 10)
        }
      }
    },
    dateEnd: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Debe introducir una Fecha'
        }
      },
      notEmpty: {
        args: true,
        msg: 'La fecha no puede ser Vacia'
      },
      get: function () {
        if (this.getDataValue('dateEnd')) {
          return this.getDataValue('dateEnd').toISOString().slice(0, 10)
        }
      }
    },
    imageUrl: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    }
  }, {
    sequelize,
    modelName: 'promotion'
  })
  Promotion.associate = function (models) {
    Promotion.belongsTo(models.Equipinfras)
    Promotion.belongsTo(models.Subcategory)
    Promotion.belongsToMany(models.Parameter, {
      through: models.PromotionParameters
    })
  }
  return Promotion
}
