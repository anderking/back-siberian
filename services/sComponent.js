'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createComponent (data) {
  const component = await models.Component.create(data)

  return getComponentById(component.id)
}

async function updateComponent (id, data) {
  const component = await getComponentById(id)

  return component.update(data)
}

async function deleteComponent (id) {
  const component = await getComponentById(id)

  return component.update({ status: 'deleted' })
}

async function getComponentById (id) {
  const component = await models.Component.findOne({
    where: { id },
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    }
  })

  if (!component) { throwError('component01') }

  return component
}

async function getComponents () {
  return models.Component.findAll({
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    },
    order: [['status', 'ASC']]
  })
}

module.exports = {
  createComponent,
  updateComponent,
  deleteComponent,
  getComponentById,
  getComponents
}
