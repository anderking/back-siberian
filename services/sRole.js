'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')
const op = models.Sequelize.Op

async function createRole (data) {
  const newRole = await models.sequelize.transaction(async () => {
    const roles = await models.Role.create(data)

    await roles.setFunctions(data.functions)

    return roles
  })

  return getRoleByID(newRole.id)
}

async function updateRole (id, data) {
  const role = await getRoleByID(id)

  return role.update(data)
}

async function deleteRole (id) {
  const role = await getRoleByID(id)

  await role.update({
    status: 'deleted'
  })
}

async function getRoleByID (id) {
  const role = await models.Role.findOne({
    where: {
      id: id,
      status: {
        [op.ne]: 'deleted'
      }
    },
    include: [models.Function]
  })

  if (!role) {
    throwError('role03')
  }

  return role
}

async function getRoles () {
  return models.Role.findAll({
    where: {
      status: {
        [op.ne]: 'deleted'
      }
    },
    include: [models.Function]
  })
}

async function updateStatus (id, status) {
  const role = await models.Role.findOne({
    where: {
      id: id,
      status: {
        [op.ne]: status
      }
    }
  })

  if (!role) {
    throwError('role03')
  }

  await role.update({
    status: status
  })
}

async function updateFunctions (id, data) {
  const role = await getRoleByID(id)

  await role.setFunctions(data.functions)

  return getRoleByID(id)
}

async function getFunctions () {
  return models.Function.findAll()
}

module.exports = {
  createRole,
  updateRole,
  deleteRole,
  getRoles,
  getRoleByID,
  updateStatus,
  updateFunctions,
  getFunctions
}
