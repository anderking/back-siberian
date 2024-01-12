const sVarietyDetail = require('../services/sVarietyDetail')
const response = require('../global/responses')
const { throwError } = require('../global/helpers')

async function addVarietyDetail (req, res) {
  try {
    const data = req.body
    const VarietyDetail = await sVarietyDetail.addVarietyDetail(data)
    response.makeResponseOk(res, { VarietyDetail }, 'varietyDetail/getVarietyDetail', 'createdM', 'Detalle de Variedad')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}
async function updateVarietyDetail (req, res) {
  try {
    const id = req.params.id
    const data = req.body
    const VarietyDetail = await sVarietyDetail.updateVarietyDetail(id, data)
    response.makeResponseOk(res, { VarietyDetail }, 'varietyDetail/getVarietyDetail', 'updatedM', 'Detalle de Variedad')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteVarietyDetail (req, res) {
  try {
    const id = req.params.id
    await sVarietyDetail.deleteVarietyDetail(id)
    response.makeResponseOkMessage(res, 'deletedM', 'Detalle de Variedad')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getServiceDetails (req, res) {
  try {
    const varietyDetail = await sVarietyDetail.getServiceDetails(req.params.id)

    if (!varietyDetail) {
      throwError('variety01')
    }

    response.makeResponseOk(res, { varietyDetail }, 'varietyDetail/service')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function setServiceDetails (req, res) {
  try {
    const varietyDetail = await sVarietyDetail.setServiceDetails(req.params.id, req.body)

    if (!varietyDetail) {
      throwError('variety01')
    }

    response.makeResponseOk(res, { varietyDetail }, 'varietyDetail/service', 'variety03')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getVarietyDetail (req, res) {
  try {
    const id = req.params.id
    console.log(id)
    const varietyDetail = await sVarietyDetail.getOneVarietyDetail(id)
    response.makeResponseOk(res, { VarietyDetail: varietyDetail }, 'varietyDetail/getVarietyDetail')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  addVarietyDetail,
  updateVarietyDetail,
  deleteVarietyDetail,
  getServiceDetails,
  setServiceDetails,
  getVarietyDetail
}
