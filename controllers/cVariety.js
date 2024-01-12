const sVariety = require('../services/sVariety')
const response = require('../global/responses')

async function getVarieties (req, res) {
  try {
    const varieties = await sVariety.getVarietiesAll()
    response.makeResponseOk(res, { varieties }, 'variety/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}
async function getVariety (req, res) {
  try {
    const Variety = await sVariety.getOneVariety(req.params.id)
    response.makeResponseOk(res, { Variety }, 'variety/single')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addVariety (req, res) {
  try {
    const Variety = await sVariety.addVariety(req.body)
    response.makeResponseOk(res, { Variety }, 'variety/single', 'createdF', 'Variedad')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updateVariety (req, res) {
  try {
    const Variety = await sVariety.updateVariety(req.params.id, req.body)
    response.makeResponseOk(res, { Variety }, 'variety/single', 'updatedF', 'Variedad')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteVariety (req, res) {
  try {
    const id = req.params.id
    await sVariety.deleteVariety(id)
    response.makeResponseOkMessage(res, 'deletedF', 'Variedad')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getVarieties,
  getVariety,
  addVariety,
  updateVariety,
  deleteVariety
}
