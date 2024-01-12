'use strict'

const sRole = require('../services/sRole')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')
const { throwError } = require('../global/helpers')

async function addRole (req, res) {
  try {
    const role = await sRole.createRole(req.body)

    makeResponseOk(res, { role }, 'role/single', 'createdM', 'Rol')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateRole (req, res) {
  try {
    const role = await sRole.updateRole(req.params.id, req.body)

    makeResponseOk(res, { role }, 'role/single', 'updatedM', 'Rol')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteRole (req, res) {
  try {
    await sRole.deleteRole(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Rol')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getRoles (req, res) {
  try {
    const roles = await sRole.getRoles()

    if (!roles.length) {
      throwError('role02')
    }

    makeResponseOk(res, { roles }, 'role/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getRole (req, res) {
  try {
    const role = await sRole.getRoleByID(req.params.id)

    makeResponseOk(res, { role }, 'role/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function changeStatus (req, res) {
  try {
    await sRole.updateStatus(req.params.id, req.params.status)

    const message = req.params.status === 'active' ? 'activatedM' : 'deactivatedM'

    makeResponseOkMessage(res, message, 'Rol')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateFunctions (req, res) {
  try {
    const role = await sRole.updateFunctions(req.params.id, req.body)

    makeResponseOk(res, { role }, 'role/single', 'role04')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getFunctions (req, res) {
  try {
    const functions = await sRole.getFunctions()

    makeResponseOk(res, { functions }, 'role/function')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  addRole,
  updateRole,
  deleteRole,
  getRoles,
  getRole,
  changeStatus,
  updateFunctions,
  getFunctions
}
