const sCategory = require('../services/sCategory')
const response = require('../global/responses')

async function getCategories (req, res) {
  try {
    const categories = await sCategory.getCategoriesAll()
    response.makeResponseOk(res, { categories }, 'category/listCategories')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getCategory (req, res) {
  try {
    const id = req.params.id
    const Category = await sCategory.getOneCategory(id)
    response.makeResponseOk(res, { Category }, 'category/getCategory')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addCategory (req, res) {
  try {
    const Category = await sCategory.addCategory(req.body, res.locals.imageUrl)
    response.makeResponseOk(res, { Category }, 'category/getCategory', 'createdF', 'Categoria')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updateCategory (req, res) {
  try {
    const Category = await sCategory.updateCategory(req.params.id, req.body, res.locals.imageUrl)
    response.makeResponseOk(res, { Category }, 'category/getCategory', 'updatedF', 'Categoria')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteCategory (req, res) {
  try {
    const id = req.params.id
    await sCategory.deleteCategory(id)
    response.makeResponseOkMessage(res, 'deletedF', 'Categoria')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getCategoriesCatalogue (req, res) {
  try {
    const categories = await sCategory.getCategoriesCatalogue()
    response.makeResponseOk(res, { categories }, 'category/listCategories')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}
module.exports = {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoriesCatalogue
}
// res.status(200).send({ Category })
