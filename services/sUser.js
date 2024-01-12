'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')
const op = models.Sequelize.Op

async function createClient (data) {
  const newUser = await models.sequelize.transaction(async transaction => {
    const clientRole = await models.Role.findOne({
      where: {
        name: 'Cliente'
      }
    })

    if (!clientRole) {
      throwError('role05')
    }

    const user = await models.User.build({
      email: data.email.toLowerCase(),
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      dni: data.dni,
      dniType: data.dniType,
      RoleId: clientRole.id,
      dateOfBirth: data.dateOfBirth
    }).save()

    await user.setRole(clientRole.id)

    return user
  })
  return getUserLogin(newUser.email)
}

async function createUser (data) {
  const newUser = await models.sequelize.transaction(async transaction => {
    const user = await models.User.create(data)

    await user.setRole(data.RoleId)

    return user
  })
  return models.User.findByPk(newUser.id, {
    include: [{
      model: models.Role,
      include: [{
        model: models.Function
      }]
    }]
  })
}

async function updateUser (id, data) {
  await models.sequelize.transaction(async transaction => {
    const user = await models.User.findOne({
      where: {
        id: id,
        status: {
          [op.ne]: 'deleted'
        }
      }
    })

    if (!user) {
      throwError('user02')
    }
    const home = await models.Location.findOne({
      where: {
        UserId: id,
        isLivingPlace: true
      }
    })

    if (!home && data.locations.length) {
      const location = await models.Location.create(data.locations[0])
      await user.setLocations(location)
    } else if (data.locations.length) {
      await home.update(data.locations[0])
    }

    await user.update(data)
  })
  return getUserByID(id)
}

async function getUserLogin (email) {
  const user = await models.User.findOne({
    where: {
      email: email.toLowerCase(),
      status: 'active'
    },
    include: [{
      model: models.Role,
      include: [{
        model: models.Function
      }]
    }]
  })

  if (!user) {
    throwError('user02')
  }
  const functions = []
  for (const f of user.Role.Functions) {
    functions.push(f.id)
  }

  return models.User.findOne({
    where: {
      email: email.toLowerCase(),
      status: 'active'
    },
    include: [
      { model: models.Phone, required: false },
      { model: models.Location, where: { isLivingPlace: true }, required: false },
      { model: models.Parameter, required: false },
      { model: models.Role,
      include: [{
        model: models.Function,
        where: {
          parentId: null
        },
        include: [{
          model: models.Function,
          as: 'child',
          where: {
            id: {
              [op.in]: functions
            }
          },
          required: false,
          include: [{
            model: models.Function,
            as: 'child',
            where: {
              id: {
                [op.in]: functions
              }
            },
            required: false
          }]
        }]
      }]
    }]
  })
}

async function getUserByID (id) {
  const user = await models.User.findByPk(id, {
    attributes: {
      exclude: ['password']
    },
    include: [models.Role, models.Phone, {
      model: models.Location,
      where: {
        isLivingPlace: true
      },
      required: false
    },
    models.Parameter
    ]
  })

  if (!user) {
    throwError('user02')
	}

  return getUserLogin(user.email)
}

async function getAllUsers () {
  return models.User.findAll({
    where: {
      status: 'active'
    },
    attributes: {
      exclude: ['password']
    },
    include: [models.Role, models.Phone, {
      model: models.Location,
      where: {
        isLivingPlace: true
      },
      required: false
    }]
  })
}

async function updateStatus (id, status) {
  const user = await models.User.findOne({
    where: {
      id: id,
      status: {
        [op.ne]: status
      }
    }
  })

  if (!user) {
    throwError('user02')
  }

  await user.update({
    status: status
  })
}

async function updateRole (id, role) {
  const user = await getUserByID(id)

  await user.setRole(role)

  return getUserByID(id)
}

async function getUsersByRole (id) {
  return models.User.findAll({
    where: {
      RoleId: id
    },
    attributes: {
      exclude: ['password']
    },
    include: [models.Role]
  })
}

async function getUsersByStatus (status) {
  return models.User.findAll({
    where: {
      status: status
    },
    attributes: {
      exclude: ['password']
    },
    include: [models.Role]
  })
}

async function getLenders () {
  const lender = await models.Role.findOne({
    where: {
      name: 'Prestador'
    }
  })

  if (!lender) {
    throwError('role03')
  }

  return models.User.findAll({
    where: {
      status: 'active',
      RoleId: lender.id
    },
    include: [models.Skill]
  })
}

async function getLenderSkills (id) {
  const lender = await getUserByID(id)

  if (lender.Role.name !== 'Prestador') {
    throwError('lender01')
  }

  return models.User.findOne({
    where: {
      id: id
    },
    include: [models.Skill]
  })
}

async function setLenderSkills (id, data) {
  const lender = await getUserByID(id)

  if (lender.Role.name !== 'Prestador') {
    throwError('lender01')
  }

  await lender.setSkills(data.skills)

  return models.User.findOne({
    where: {
      id: id
    },
    include: [models.Skill]
  })
}

async function getLenderAvailability (id) {
  const lender = await getUserByID(id)

  if (lender.Role.name !== 'Prestador') throwError('lender01')

  return models.User.findOne({
    where: { id },
    include: { model: models.LenderCalendar,
      where: { status: 'booked' },
      include: { model: models.Calendar,
        where: { status: 'booked' },
        include: [
          { model: models.Revision, required: false,
          include:[
            { model: models.User },
            { model: models.Location },
            { model: models.VarietyDetail,
              include: [{ model: models.VarietyEquipinfras }]
            }]
          },
          { model: models.ServiceOrderDetail,
            required: false,
            include: { model: models.ServiceOrder }
          }
        ]
      }
    }
  })
}

async function setUserParameters (id, data) {
  const user = await getUserByID(id)

  if (user.Role.name !== 'Cliente') {
    throwError('user05')
  }

  await user.setParameters(data.parameters)

  return getUserByID(user.id)
}

async function setAndroidID (id, androidId) {
  const user = await getUserByID(id)

  await user.update({
    androidId: androidId
  })
  return getUserByID(id)
}

async function getUserFunctions (id) {
  const user = await models.User.findOne({
    where: {
      id: id,
      status: 'active'
    },
    include: [{
      model: models.Role,
      include: [{
        model: models.Function
      }]
    }]
  })

  if (!user) {
    throwError('user02')
  }
  const functions = []
  for (const f of user.Role.Functions) {
    functions.push(f.id)
  }

  return models.User.findOne({
    where: {
      id: id,
      status: 'active'
    },
    include: [{
      model: models.Role,
      include: [{
        model: models.Function,
        where: {
          parentId: null
        },
        include: [{
          model: models.Function,
          as: 'child',
          where: {
            id: {
              [op.in]: functions
            }
          },
          required: false,
          include: [{
            model: models.Function,
            as: 'child',
            where: {
              id: {
                [op.in]: functions
              }
            },
            required: false
          }]
        }]
      }]
    }]
  })
}
module.exports = {
  createClient,
  createUser,
  getUserLogin,
  getUserByID,
  getAllUsers,
  updateUser,
  updateStatus,
  updateRole,
  getUsersByRole,
  getUsersByStatus,
  getLenders,
  getLenderSkills,
  setLenderSkills,
  setUserParameters,
  setAndroidID,
	getLenderAvailability,
	getUserFunctions
}
