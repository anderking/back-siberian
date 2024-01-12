'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getVarietiesAll () {
  const varieties = await models.Variety.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      {
        model: models.VarietyEquipinfras,
        required: false,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
        include: [
          {
            model: models.Equipinfras,
            required: false,
            where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
            include: [{
              model: models.Subcategory,
              where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
            }] },
          {
            model: models.VarietyDetail,
            required: false,
            where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
          }
        ]
      }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!varieties || !varieties.length) { throwError('variety02') }
  return varieties
}

async function getVariety (id) {
  const Variety = await models.Variety.findOne({ where: { id, status: 'active' } })
  if (!Variety) throwError('variety01')
  return Variety
}

async function getOneVariety (id) {
  const Variety = await models.Variety.findOne({
    where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      {
        model: models.VarietyEquipinfras,
        required: false,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
        include: [
          {
            model: models.Equipinfras,
            required: false,
            where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
            include: [{
              model: models.Subcategory,
              where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
            }]
          },
          {
            model: models.VarietyDetail,
            required: false,
            where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
          }
        ]
      }
    ],
    order: [['id', 'asc']]
  })

  if (!Variety) throwError('variety01')
  return Variety
}

async function addVariety (data) {
  const newVariety = await models.sequelize.transaction(async transaction => {
    const Variety = await models.Variety.create(data)
    return Variety
  })
  return getOneVariety(newVariety.id)
}

async function updateVariety (id, data) {
  const VarietyOld = await getOneVariety(id)
  return VarietyOld.update(data)
}

async function deleteVariety (id) {
  const VarietyOld = await getVariety(id)
  await VarietyOld.update({ status: 'deleted' })
}

module.exports = {
  getVarietiesAll,
  getVariety,
  getOneVariety,
  addVariety,
  updateVariety,
  deleteVariety
}
