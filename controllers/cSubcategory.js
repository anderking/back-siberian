const sSubcategory = require('../services/sSubcategory')
const response = require('../global/responses')

async function getSubcategories (req, res) {
  try {
    const subcategories = await sSubcategory.getSubcategoriesAll()
    response.makeResponseOk(res, { subcategories }, 'subcategory/listSubcategories')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getSubcategory (req, res) {
  try {
    const id = req.params.id
    const Subcategory = await sSubcategory.getOneSubcategory(id)
    response.makeResponseOk(res, { Subcategory }, 'subcategory/getSubcategory')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addSubcategory (req, res) {
  try {
    const body = req.body
    const Subcategory = await sSubcategory.addSubcategory(body)
    response.makeResponseOk(res, { Subcategory }, 'subcategory/getSubcategory', 'createdF', 'Subcateogria')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updateSubcategory (req, res) {
  try {
    const id = req.params.id
    const data = req.body
    const Subcategory = await sSubcategory.updateSubcategory(id, data)
    response.makeResponseOk(res, { Subcategory }, 'subcategory/getSubcategory', 'updatedF', 'Subcateogria')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteSubcategory (req, res) {
  try {
    const id = req.params.id
    await sSubcategory.deleteSubcategory(id)
    response.makeResponseOkMessage(res, 'deletedF', 'Subcategoria')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getSubcategoryCatalogue (req, res) {
  try {
    const id = req.params.id
    const Subcategory = await sSubcategory.getOneSubcategoryCatalogue(id)
    response.makeResponseOk(res, { Subcategory }, 'subcategory/getSubcategoryCatalogue')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getSubcategories,
  addSubcategory,
  updateSubcategory,
  deleteSubcategory,
  getSubcategory,
  getSubcategoryCatalogue
}
// res.status(200).send({ data : body })
