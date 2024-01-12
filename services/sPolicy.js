'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createPolicy (data) {
  const policy = await models.Policy.create(data)

  return getPolicyById(policy.id)
}

async function updatePolicy (id, data) {
  const policy = await getPolicyById(id)

  return policy.update(data)
}

async function deletePolicy (id) {
  const policy = await getPolicyById(id)

  return policy.update({ status: 'deleted' })
}

async function getPolicyById (id) {
  const policy = await models.Policy.findOne({
    where: { id },
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    }
  })

  if (!policy) { throwError('policy01') }

  return policy
}

async function getPolicies () {
  return models.Policy.findAll({
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    },
    order: [['status', 'ASC']]
  })
}

module.exports = {
  createPolicy,
  updatePolicy,
  deletePolicy,
  getPolicyById,
  getPolicies
}
