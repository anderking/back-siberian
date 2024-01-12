const sMotive = require('../services/sMotive')
const response = require('../global/responses')

async function getMotives (req, res) {
  try {
    const motives = await sMotive.getMotives()
    response.makeResponseOk(res, { motives }, 'motive/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getMotive (req, res) {
  try {
    const Motive = await sMotive.getMotive(req.params.id)
    response.makeResponseOk(res, { Motive }, 'motive/single')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addMotive (req, res) {
  try {
    const body = req.body
    console.log(req.body)
    const Motive = await sMotive.addMotive(body)
    response.makeResponseOk(res, { Motive }, 'motive/single', 'createdM', 'Motivo')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updateMotive (req, res) {
  try {
    const Motive = await sMotive.updateMotive(req.params.id, req.body)
    response.makeResponseOk(res, { Motive }, 'motive/single', 'updatedM', 'Motivo')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteMotive (req, res) {
  try {
    await sMotive.deleteMotive(req.params.id)
    response.makeResponseOkMessage(res, 'deletedM', 'Motivo')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getMotives,
  getMotive,
  addMotive,
  updateMotive,
  deleteMotive
}
// res.status(200).send({ Motive })
