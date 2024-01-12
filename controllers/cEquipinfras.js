const sEquipinfras = require('../services/sEquipinfras')
const response = require('../global/responses')

async function getAllEquipinfras (req, res) {
  try {
    const Equipinfras = await sEquipinfras.getEquipinfrasAll()
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/listEquipinfras')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getEquipinfras (req, res) {
  try {
    const id = req.params.id
    const Equipinfras = await sEquipinfras.getOneEquipinfras(id)
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/getEquipinfras')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addEquipinfras (req, res) {
  try {
    const Equipinfras = await sEquipinfras.addEquipinfras(req.body, res.locals.imageUrl)
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/getEquipinfras', 'createdM', 'Equipo - Infraestructura')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updateEquipinfras (req, res) {
  try {
    const Equipinfras = await sEquipinfras.updateEquipinfras(req.params.id, req.body, res.locals.imageUrl)
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/getEquipinfras', 'updatedM', 'Equipo - Infraestructura')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteEquipinfras (req, res) {
  try {
    const id = req.params.id
    await sEquipinfras.deleteEquipinfras(id)
    response.makeResponseOkMessage(res, 'deletedM', 'Equipo - Infraestructura')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addVarietyEquipinfras (req, res) {
  try {
    const Equipinfras = await sEquipinfras.addVarietyToEquipinfras(req.body)
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/getEquipinfras', 'assignedF', 'Variedad')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteVarietyEquipinfras (req, res) {
  try {
    const idEquipinfras = req.params.eid
    const idVariety = req.params.vid
    await sEquipinfras.deleteVarietyOfEquipinfras(idEquipinfras, idVariety)
    response.makeResponseOkMessage(res, 'deletedF', 'Variedad Equipo - Infraestructura')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getEquipinfrasByName (req, res) {
  try {
    const name = req.params.n
    const Equipinfras = await sEquipinfras.getEquipinfrasByName(name)
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/listEquipinfrasByName')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getEquipinfrasByNameAndStatus (req, res) {
  try {
    const name = req.params.n
    const status = req.params.s
    const Equipinfras = await sEquipinfras.getEquipinfrasByNameAndStatus(name, status)
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/listEquipinfrasByName')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getEquipinfrasCatalogue (req, res) {
  try {
    const id = req.params.id
    const Equipinfras = await sEquipinfras.getOneEquipinfrasCatalogue(id)
    response.makeResponseOk(res, { Equipinfras }, 'equipinfras/getEquipinfras')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getAllEquipinfras,
  getEquipinfras,
  addEquipinfras,
  updateEquipinfras,
  deleteEquipinfras,
  addVarietyEquipinfras,
  deleteVarietyEquipinfras,
  getEquipinfrasByName,
  getEquipinfrasByNameAndStatus,
  getEquipinfrasCatalogue
}
