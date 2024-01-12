'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getCategoriesAll () {
  const Categories = await models.Category.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [{
      model: models.Subcategory,
      required: false,
      where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
    }],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Categories || !Categories.length) { throwError('category02') }
  return Categories
}

async function getCategory (id) {
  const Category = await models.Category.findOne({ where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } } })
  if (!Category) throwError('category01')
  return Category
}

async function getOneCategory (id) {
  const Category = await models.Category.findOne({
    where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [{
      model: models.Subcategory,
      required: false,
      where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
    }],
    order: [
      ['id', 'asc']
    ] })

  if (!Category) throwError('category01')
  return Category
}

async function addCategory (data, fileImage) {
  const newCategory = await models.sequelize.transaction(async transaction => {
    if (fileImage) { data.imageUrl = fileImage }
    const category = await models.Category.create(data)
    return category
  })
  return getOneCategory(newCategory.id)
}

async function updateCategory (id, data, fileImage) {
  const CategoryOld = await getOneCategory(id)
  if (fileImage) { data.imageUrl = fileImage }
  return CategoryOld.update(data)
}

async function deleteCategory (id) {
  const CategoryOld = await getCategory(id)
  await CategoryOld.update({ status: 'deleted' })
}

async function getCategoriesCatalogue () {
  const Catalog = await models.Category.findAll({
    where: { status: 'active' },
    include: [{
      model: models.Subcategory,
      required: false,
      where: { status: 'active' }
    }],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Catalog || !Catalog.length) { throwError('category02') }
  return Catalog
}

module.exports = {
  getCategoriesAll,
  getCategory,
  getOneCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoriesCatalogue
}
//  include: [{ all: true, nested: true }],
