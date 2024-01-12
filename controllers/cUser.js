'use strict'

const sUser = require('../services/sUser')
const secret = require('../config/setup').secret_key
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')
const { throwError } = require('../global/helpers')
const { sendMail } = require('../global/mailer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const generator = require('generate-password')

async function addClient (req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8)
    const user = await sUser.createClient(req.body)

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 * 60 })

    sendMail({
      mail: user.email,
      subject: 'Bienvenida al sistema.',
      template: 'welcome'
    })
    makeResponseOk(res, { user, token }, 'user/login', 'createdM', 'Usuario')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function login (req, res) {
  try {
    const user = await sUser.getUserLogin(req.body.email)

    if (!user) {
      throwError('user02')
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      throwError('user03')
    }

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 * 60 })

    makeResponseOk(res, { user, token }, 'user/login')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getUser (req, res) {
  try {
    const user = await sUser.getUserByID(req.params.id)

    makeResponseOk(res, { user }, 'user/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getUsers (req, res) {
  try {
    const users = await sUser.getAllUsers()

    if (!users.length) {
      throwError('G19')
    }

    makeResponseOk(res, { users }, 'user/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateUser (req, res) {
  try {
    const id = req.params.id

    const user = await sUser.updateUser(id, req.body)

    makeResponseOk(res, { user }, 'user/single', 'updatedM', 'Usuario')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteUser (req, res) {
  try {
    await sUser.updateStatus(req.params.id, 'deleted')

    makeResponseOkMessage(res, 'deletedM', 'Usuario')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function inactivateUser (req, res) {
  try {
    await sUser.updateStatus(req.params.id, 'inactive')

    makeResponseOkMessage(res, 'deactivatedM', 'Usuario')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function activateUser (req, res) {
  try {
    await sUser.updateStatus(req.params.id, 'active')

    makeResponseOkMessage(res, 'activatedM', 'Usuario')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function changeRole (req, res) {
  try {
    const user = await sUser.updateRole(req.params.uid, req.params.rid)

    makeResponseOk(res, { user }, 'user/single', 'updatedM', 'Rol')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function addUser (req, res) {
  try {
    var password = generator.generate({
      length: 10,
      numbers: true,
      symbols: true,
      uppercase: true,
      exclude: '{}[]\'`|~^*()_-=+<>',
      strict: true
    })

    req.body.password = bcrypt.hashSync(password, 8)
    const user = await sUser.createUser(req.body)

    makeResponseOk(res, { user }, 'user/login', 'createdM', 'Usuario')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getUsersByRole (req, res) {
  try {
    const users = await sUser.getUsersByRole(req.params.id)

    if (!users.length) {
      throwError('G19')
    }

    makeResponseOk(res, { users }, 'user/list')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getUsersByStatus (req, res) {
  try {
    const users = await sUser.getUsersByStatus(req.params.status)

    if (!users.length) {
      throwError('G19')
    }

    makeResponseOk(res, { users }, 'user/list')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getLenders (req, res) {
  try {
    const lenders = await sUser.getLenders()

    if (!lenders.length) {
      throwError('G19')
    }

    makeResponseOk(res, { lenders }, 'lender/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getLender (req, res) {
  try {
    const lender = await sUser.getLenderSkills(req.params.id)

    makeResponseOk(res, { lender }, 'lender/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getLenderAvailability (req, res) {
  try {
    const lender = await sUser.getLenderAvailability(req.params.id)
    //res.status(200).send({ lender })

    makeResponseOk(res, { lender }, 'lender/availability')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function setSkills (req, res) {
  try {
    const lender = await sUser.setLenderSkills(req.params.id, req.body)

    makeResponseOk(res, { lender }, 'lender/single', 'updatedM', 'Prestador')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function setParameters (req, res) {
  try {
    const user = await sUser.setUserParameters(req.params.id, req.body)
    makeResponseOk(res, { user }, 'user/single', 'updatedM', 'Cliente')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function setAndroidId (req, res) {
  try {
    const user = await sUser.setAndroidID(req.params.id, req.body.androidId)
    makeResponseOk(res, { user }, 'user/single', 'updatedM', 'Cliente')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getUserFunctions (req, res) {
  try {
    const user = await sUser.getUserFunctions(req.params.id)

    makeResponseOk(res, { user, token: '' }, 'user/login')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  addClient,
  addUser,
  login,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  inactivateUser,
  activateUser,
  changeRole,
  getUsersByRole,
  getUsersByStatus,
  getLenders,
  getLender,
  setSkills,
  setParameters,
  setAndroidId,
	getLenderAvailability,
	getUserFunctions
}
