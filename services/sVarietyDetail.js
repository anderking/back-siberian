'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function addVarietyDetail (data) {
  const VarietyDetail = await models.VarietyDetail.create(data)
  return VarietyDetail
}

async function getOneVarietyDetail (id) {
  const VarietyDetail = await models.VarietyDetail.findOne({ where: { id, status: 'active' } })
  if (!VarietyDetail) throwError('varietyDetail01')
  return VarietyDetail
}

async function updateVarietyDetail (id, data) {
  const VarietyDetailOld = await getOneVarietyDetail(id)
  return VarietyDetailOld.update(data)
}

async function deleteVarietyDetail (id) {
  const VarietyDetailOld = await getOneVarietyDetail(id)
  await VarietyDetailOld.update({ status: 'deleted' })
}

async function getServiceDetails (id) {
  return models.VarietyDetail.findOne({
    where: {
      id: id,
      status: 'active'
    },
    include: [models.ServiceDetail]
  })
}

async function setServiceDetails (id, body) {
  const variety = await getOneVarietyDetail(id)

  await variety.setServiceDetails(body.services)

  return getServiceDetails(id)
}

module.exports = {
  addVarietyDetail,
  getOneVarietyDetail,
  updateVarietyDetail,
  deleteVarietyDetail,
  getServiceDetails,
  setServiceDetails
}
