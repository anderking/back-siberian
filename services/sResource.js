'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createResource (data) {
  const resource = await models.Resource.create(data)

  return getResourceById(resource.id)
}

async function updateResource (id, data) {
  const resource = await getResourceById(id)

  return resource.update(data)
}

async function deleteResource (id) {
  const resource = await getResourceById(id)

  return resource.update({ status: 'deleted' })
}

async function getResourceById (id) {
  const resource = await models.Resource.findOne({
    where: { id },
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    }
  })

  if (!resource) throwError('resource01')

  return resource
}

async function getResources () {
  return models.Resource.findAll({
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    },
    order: [['status', 'ASC']]
  })
}

async function getResourcesByIds (data) {
  return models.Resource.findAll({
    where: { id: { [models.Sequelize.Op.or]: JSON.parse(data.ids) } },
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    },
    order: [['status', 'ASC']]
  })
}

module.exports = {
  createResource,
  updateResource,
  deleteResource,
  getResourceById,
  getResources,
  getResourcesByIds
}
