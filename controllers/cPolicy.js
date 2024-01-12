'use strict'

const sPolicy = require('../services/sPolicy')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createPolicy (req, res) {
  try {
    const policy = await sPolicy.createPolicy(req.body)

    makeResponseOk(res, { policy }, 'policy/single', 'createdF', 'Política')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updatePolicy (req, res) {
  try {
    const policy = await sPolicy.updatePolicy(req.params.id, req.body)

    makeResponseOk(res, { policy }, 'policy/single', 'updatedF', 'Política')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deletePolicy (req, res) {
  try {
    await sPolicy.deletePolicy(req.params.id)

    makeResponseOkMessage(res, 'deletedF', 'Política')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getPolicy (req, res) {
  try {
    const policy = await sPolicy.getPolicyById(req.params.id)

    makeResponseOk(res, { policy }, 'policy/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getPolicies (req, res) {
  try {
    const policies = await sPolicy.getPolicies()

    makeResponseOk(res, { policies }, 'policy/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createPolicy,
  updatePolicy,
  deletePolicy,
  getPolicy,
  getPolicies
}
