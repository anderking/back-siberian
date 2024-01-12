'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getSubcategoriesAll () {
  const Subcategories = await models.Subcategory.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      {
        model: models.Category,
        required: true,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
      },
      {
        model: models.Equipinfras,
        required: false,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
      }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Subcategories || !Subcategories.length) { throwError('subcategory02') }
  return Subcategories
}

async function addSubcategory (data) {
  const newSubcategory = await models.sequelize.transaction(async transaction => {
    const subcategory = await models.Subcategory.create(data)
    return subcategory
  })
  return getOneSubcategory(newSubcategory.id)
}

async function getSubcategory (id) {
  const Subcategory = await models.Subcategory.findOne({
    where: { id, status: 'active' } })
  if (!Subcategory) throwError('subcategory01')
  return Subcategory
}

async function getOneSubcategory (id) {
  const Subcategory = await models.Subcategory.findOne({
    where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      {
        model: models.Category,
        required: true,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
      },
      {
        model: models.Equipinfras,
        required: false,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
        include: [
          {
            model: models.VarietyEquipinfras,
            required: false,
            where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
            include: [
              { model: models.Variety, required: false, where: { status: { [models.Sequelize.Op.ne]: 'deleted' } } },
              { model: models.VarietyDetail, required: false, where: { status: { [models.Sequelize.Op.ne]: 'deleted' } } }
            ]
          }]
      }
    ],
    order: [
      ['id', 'asc']
    ] })
  if (!Subcategory) throwError('subcategory01')
  return Subcategory
}

async function updateSubcategory (id, data) {
  const SubcategoryOld = await getOneSubcategory(id)
  return SubcategoryOld.update(data)
}

async function deleteSubcategory (id) {
  const SubcategoryOld = await getSubcategory(id)
  await SubcategoryOld.update({ status: 'deleted' })
}

async function getOneSubcategoryCatalogue (id) {
  const Subcategory = await models.Subcategory.findOne({
    where: { id, status: 'active' },
    include: [
      {
        model: models.Category,
        required: true,
        where: { status: 'active' }
      },
      {
        model: models.Equipinfras,
        required: false,
        where: { status: 'active' },
        include: [
          {
            model: models.VarietyEquipinfras,
            required: false,
            where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
            include: [
              { model: models.Variety, required: false, where: { status: { [models.Sequelize.Op.ne]: 'deleted' } } },
              { model: models.VarietyDetail, required: false, where: { status: { [models.Sequelize.Op.ne]: 'deleted' } } }
            ]
          }]
      }
    ],
    order: [
      ['id', 'asc']
    ] })
  if (!Subcategory) throwError('subcategory01')
  return Subcategory
}

module.exports = {
  getSubcategoriesAll,
  addSubcategory,
  getSubcategory,
  getOneSubcategory,
  updateSubcategory,
  deleteSubcategory,
  getOneSubcategoryCatalogue
}
