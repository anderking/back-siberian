const sGroup = require('../services/sGroup')
const response = require('../global/responses')

async function getGroups (req, res) {
  try {
    const groups = await sGroup.getGroups()
    response.makeResponseOk(res, { groups }, 'group/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getGroup (req, res) {
  try {
    const group = await sGroup.getGroup(req.params.id)
    response.makeResponseOk(res, { group }, 'group/single')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addGroup (req, res) {
  try {
    const group = await sGroup.addGroup(req.body)
    response.makeResponseOk(res, { group }, 'group/single', 'createdM', 'Grupo')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updateGroup (req, res) {
  try {
    const group = await sGroup.updateGroup(req.params.id, req.body)
    response.makeResponseOk(res, { group }, 'group/single', 'updatedM', 'Grupo')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteGroup (req, res) {
  try {
    await sGroup.deleteGroup(req.params.id)
    response.makeResponseOkMessage(res, 'deletedM', 'Grupo')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getGroups,
  getGroup,
  addGroup,
  updateGroup,
  deleteGroup
}
// res.status(200).send({ Group })
