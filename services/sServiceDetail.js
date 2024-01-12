'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createServiceDetail (data) {
  const serviceDetailCreated = await models.sequelize.transaction(async transaction => {
    const serviceDetail = await models.ServiceDetail.create(data, { transaction })

    if (data.resources) {
      const resources = data.resources.map(resource => resource.id)

      await serviceDetail.setResources(resources, { transaction })
      await setQuantity(serviceDetail, data.resources, transaction)
    }
    if (data.activities) await serviceDetail.setActivities(data.activities, { transaction })
    if (data.skills) await serviceDetail.setSkills(data.skills, { transaction })
    if (data.policies) await serviceDetail.setPolicies(await getActivePolicies(data.policies), { transaction })

    return serviceDetail
  })

  return getServiceDetailById(serviceDetailCreated.id)
}

async function updateServiceDetail (id, data) {
  await models.sequelize.transaction(async transaction => {
    const serviceDetail = await getServiceDetailById(id)

    if (data.resources) {
      const resources = data.resources.map(resource => resource.id)

      await serviceDetail.setResources(resources, { transaction })
      await setQuantity(serviceDetail, data.resources, transaction)
    }
    if (data.activities) await serviceDetail.setActivities(data.activities, { transaction })
    if (data.policies) await serviceDetail.setPolicies(await getActivePolicies(data.policies), { transaction })
    if (data.skills) await serviceDetail.setSkills(data.skills, { transaction })

    await serviceDetail.update(data, { transaction })
  })

  return getServiceDetailById(id)
}

async function deleteServiceDetail (id) {
  const serviceDetail = await getServiceDetailById(id)

  return serviceDetail.update({ status: 'deleted' })
}

async function getServiceDetailById (id) {
  const serviceDetail = await models.ServiceDetail.findOne({
    where: { id },
    include: [
      { model: models.Component },
      { model: models.Activity, where: { status: 'active' }, required: false },
      { model: models.Policy, where: { status: 'active' }, required: false },
      { model: models.Resource, where: { status: 'active' }, required: false },
      { model: models.Skill, where: { status: 'active' }, required: false },
      { model: models.VarietyDetail, where: { status: 'active' }, required: false }
    ]
  })

  if (!serviceDetail) throwError('serviceDetail01')

  return serviceDetail
}

async function getServiceDetails () {
  return models.ServiceDetail.findAll({
    include: [
      { model: models.Component },
      { model: models.Activity, where: { status: 'active' }, required: false },
      { model: models.Resource, where: { status: 'active' }, required: false },
      { model: models.Policy, where: { status: 'active' }, required: false },
      { model: models.Skill, where: { status: 'active' }, required: false },
      { model: models.VarietyDetail, where: { status: 'active' }, required: false }
    ],
    order: [['status', 'ASC']]
  })
}

async function getActivePolicies (policies) {
  return policies.filter(async policyId =>
    await models.Policy.findOne({
      where: { id: policyId }, attributes: ['status']
    }) === 'active')
}

async function setQuantity (serviceDetail, serviceDetailResources, transaction) {
  const resources = await serviceDetail.getResources({ transaction })
  const ObjServiceDetailResources = resources.map(resource => resource.ServiceDetailResource)

  for (let i = 0; i < serviceDetailResources.length; i++) {
    var serviceDetailResource = serviceDetailResources[i]

    for (let j = 0; j < ObjServiceDetailResources.length; j++) {
      if (serviceDetailResource.id === ObjServiceDetailResources[j].ResourceId) {
        await ObjServiceDetailResources[j].update(
          { quantity: serviceDetailResource.quantity },
          { transaction }
        )
      }
    }
  }
}

module.exports = {
  createServiceDetail,
  updateServiceDetail,
  deleteServiceDetail,
  getServiceDetailById,
  getServiceDetails
}
