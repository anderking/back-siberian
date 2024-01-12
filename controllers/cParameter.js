const sParameter = require('../services/sParameter')
const response = require('../global/responses')

async function getParameters (req, res) {
  try {
    const parameters = await sParameter.getParameters()
    response.makeResponseOk(res, { parameters }, 'parameter/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getParameter (req, res) {
  try {
    const parameter = await sParameter.getParameter(req.params.id)
    response.makeResponseOk(res, { parameter }, 'parameter/single')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addParameter (req, res) {
  try {
    const parameter = await sParameter.addParameter(req.body)
    response.makeResponseOk(res, { parameter }, 'parameter/single', 'createdM', 'Parametro')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updateParameter (req, res) {
  try {
    const parameter = await sParameter.updateParameter(req.params.id, req.body)
    response.makeResponseOk(res, { parameter }, 'parameter/single', 'updatedM', 'Parametro')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteParameter (req, res) {
  try {
    await sParameter.deleteParameter(req.params.id)
    response.makeResponseOkMessage(res, 'deletedM', 'Parametro')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getParameters,
  getParameter,
  addParameter,
  updateParameter,
  deleteParameter
}
// res.status(200).send({ parameters })
