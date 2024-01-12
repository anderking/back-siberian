'use strict'

const sResource = require('../services/sResource')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createResource (req, res) {
  try {
    const resource = await sResource.createResource(req.body)

    makeResponseOk(res, { resource }, 'resource/single', 'createdM', 'Recurso')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateResource (req, res) {
  try {
    const resource = await sResource.updateResource(req.params.id, req.body)

    makeResponseOk(res, { resource }, 'resource/single', 'updatedM', 'Recurso')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteResource (req, res) {
  try {
    await sResource.deleteResource(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Recurso')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getResource (req, res) {
  try {
    const resource = await sResource.getResourceById(req.params.id)

    makeResponseOk(res, { resource }, 'resource/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getResources (req, res) {
  try {
    const resources = await sResource.getResources()

    makeResponseOk(res, { resources }, 'resource/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getResourcesByIds (req, res) {
  try {
    const resources = await sResource.getResourcesByIds(req.query)

    makeResponseOk(res, { resources }, 'resource/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}
module.exports = {
  createResource,
  updateResource,
  deleteResource,
  getResource,
  getResources,
  getResourcesByIds
}
