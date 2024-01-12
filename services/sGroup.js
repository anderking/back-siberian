'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getGroups () {
  const Groups = await models.Group.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      { model: models.Parameter, require: false }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Groups || !Groups.length) { throwError('group02') }
  return Groups
}

async function getGroup (id) {
  const Group = await models.Group.findOne({
    where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      { model: models.Parameter, require: false }
    ]
  })
  if (!Group) throwError('group01')
  return Group
}

async function addGroup (data) {
  const newGroup = await models.Group.create(data)
  return getGroup(newGroup.id)
}

async function updateGroup (id, data) {
  const oldGroup = await getGroup(id)
  return oldGroup.update(data)
}

async function deleteGroup (id) {
  const oldGroup = await getGroup(id)
  await oldGroup.update({ status: 'deleted' })
}

module.exports = {
  getGroups,
  getGroup,
  addGroup,
  updateGroup,
  deleteGroup
}
//  include: [{ all: true, nested: true }],
