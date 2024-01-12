'use strict'

const msg = require('../static/messages')

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
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
    rif: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'RIF' + msg.G1
        },
        len: {
          args: [5, 20],
          msg: 'RIF' + msg.G10 + ' 5 y 20 caracteres.'
        }
      }
    },
    aboutUs: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 2000],
          msg: 'Sobre Nosotros' + msg.G13
        }
      }
    },
    vision: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 2000],
          msg: 'Visión' + msg.G13
        }
      }
    },
    mision: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 2000],
          msg: 'Misión' + msg.G13
        }
      }
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: msg.G14
        }
      }
    },
    phoneOne: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Teléfono' + msg.G1
        },
        len: {
          args: [10, 25],
          msg: 'Teléfono uno' + msg.G10 + ' 10 y 25 caracteres.'
        }
      }
    },
    phoneTwo: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 25],
          msg: 'Teléfono Dos' + msg.G10 + ' 10 y 25 caracteres.'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 2000],
          msg: 'Dirección' + msg.G13
        }
      }
    },
    facebook: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 45],
          msg: 'Facebook' + msg.G10 + ' 2 y 45 caracteres.'
        }
      }
    },
    instagram: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 45],
          msg: 'Instagram' + msg.G10 + ' 2 y 45 caracteres.'
        }
      }
    },
    twitter: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 45],
          msg: 'Twitter' + msg.G10 + ' 2 y 45 caracteres.'
        }
      }
    },
    revisionPrice: {
      type: DataTypes.FLOAT(2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Precio de Revisión' + msg.G1
        }
      }
    }
  },
  {
    modelName: 'company',
    sequelize
  })

  Company.associate = function (models) {}

  return Company
}
