'use strict'

const sComponent = require('../services/sComponent')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createComponent (req, res) {
  try {
    const component = await sComponent.createComponent(req.body)

    makeResponseOk(res, { component }, 'component/single', 'createdM', 'Componente')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateComponent (req, res) {
  try {
    const component = await sComponent.updateComponent(req.params.id, req.body)

    makeResponseOk(res, { component }, 'component/single', 'updatedM', 'Componente')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteComponent (req, res) {
  try {
    await sComponent.deleteComponent(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Componente')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getComponent (req, res) {
  try {
    const component = await sComponent.getComponentById(req.params.id)

    makeResponseOk(res, { component }, 'component/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getComponents (req, res) {
  try {
    const components = await sComponent.getComponents()

    makeResponseOk(res, { components }, 'component/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createComponent,
  updateComponent,
  deleteComponent,
  getComponent,
  getComponents
}
