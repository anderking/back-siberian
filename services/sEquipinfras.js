'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getEquipinfrasAll () {
  const Equipinfras = await models.Equipinfras.findAll({
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
      },
      {
        model: models.Subcategory,
        required: true,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } }
      }],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Equipinfras || !Equipinfras.length) { throwError('equipinfras02') }
  return Equipinfras
}

async function getEquipinfras (id) {
  const Equipinfras = await models.Equipinfras.findOne({ where: { id, status: 'active' } })
  if (!Equipinfras) throwError('equipinfras01')
  return Equipinfras
}

async function getOneEquipinfras (id) {
  const Equipinfras = await models.Equipinfras.findOne({
    where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      {
        model: models.Subcategory,
        required: true,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
        include: [{ model: models.Category, required: true }]
      },
      {
        model: models.VarietyEquipinfras,
        required: false,
        where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
        include: [
          { model: models.Variety, required: false, where: { status: { [models.Sequelize.Op.ne]: 'deleted' } } },
          { model: models.VarietyDetail, required: false, where: { status: { [models.Sequelize.Op.ne]: 'deleted' } } }
        ]
      }],
    order: [
      ['id', 'asc']
    ] })
  if (!Equipinfras) throwError('equipinfras01')
  return Equipinfras
}

async function addEquipinfras (data, fileImage) {
  const newEquipinfras = await models.sequelize.transaction(async transaction => {
    if (fileImage) { data.imageUrl = fileImage }
    const Equipinfras = await models.Equipinfras.create(data)
    return Equipinfras
  })
  return getOneEquipinfras(newEquipinfras.id)
}

async function updateEquipinfras (id, data, fileImage) {
  const EquipinfrasOld = await getOneEquipinfras(id)
  if (fileImage) { data.imageUrl = fileImage }
  return EquipinfrasOld.update(data)
}

async function deleteEquipinfras (id) {
  const EquipinfrasOld = await getEquipinfras(id)
  await EquipinfrasOld.update({ status: 'deleted' })
}

async function getVarietyEquipinfras (equipinfrasId, varietyId) {
  const VarietyEquipinfras = await models.VarietyEquipinfras.findOne({
    where: { EquipinfraId: equipinfrasId, VarietyId: varietyId, status: 'active' } })
  return VarietyEquipinfras
}

async function addVarietyToEquipinfras (data) {
  const addVarietyToEquipinfras = await models.sequelize.transaction(async transaction => {
    const Equipinfras = await getOneEquipinfras(data.EquipinfraId)
    const VarietyEquipinfras = await getVarietyEquipinfras(data.EquipinfraId, data.VarietyId)

    if (VarietyEquipinfras) throwError('varietyEquipinfras03')
    const varietyEquipinfrass = await models.VarietyEquipinfras.create(data)

    if (Equipinfras.type === 'I') {
      // add a generic model to the variety equipinfras
      await models.VarietyDetail.build({
        VarietyEquipinfraId: varietyEquipinfrass.id,
        name: 'Generico',
        description: 'Modelo Generico, para todas las infraestructuras'
      }, { transaction }).save()
    }
    return Equipinfras
  })
  return getOneEquipinfras(addVarietyToEquipinfras.id)
}

async function deleteVarietyOfEquipinfras (equipinfrasId, varietyId) {
  await models.sequelize.transaction(async transaction => {
    const VarietyEquipinfras = await getVarietyEquipinfras(equipinfrasId, varietyId)
    if (!VarietyEquipinfras) throwError('varietyEquipinfras01')
    await VarietyEquipinfras.update({ status: 'deleted' }, { transaction })
  })
}

async function getEquipinfrasByName (valName) {
  const Equipinfras = await models.Equipinfras.findAll({
    where: {
      status: 'active',
      name: { [models.Sequelize.Op.iLike]: '%' + valName + '%' }
    },
    order: [
      ['name', 'asc']
    ]
  })
  if (!Equipinfras || !Equipinfras.length) { throwError('equipinfras02') }
  return Equipinfras
}

async function getEquipinfrasByNameAndStatus (valName, valStatus) {
  const Equipinfras = await models.Equipinfras.findAll({
    where: {
      status: valStatus,
      name: { [models.Sequelize.Op.iLike]: '%' + valName + '%' }
    },
    order: [
      ['name', 'asc']
    ]
  })
  if (!Equipinfras || !Equipinfras.length) { throwError('equipinfras02') }
  return Equipinfras
}

async function getOneEquipinfrasCatalogue (id) {
  const Equipinfras = await models.Equipinfras.findOne({
    where: { id, status: 'active' },
    include: [{
      model: models.VarietyEquipinfras,
      required: false,
      where: { status: 'active' },
      include: [
        { model: models.Variety, required: false, where: { status: 'active' } },
        { model: models.VarietyDetail, required: false, where: { status: 'active' } }
      ] },
    {
      model: models.Subcategory,
      required: true,
      where: { status: 'active' }
    }],
    order: [
      ['id', 'asc']
    ] })
  if (!Equipinfras) throwError('equipinfras01')
  return Equipinfras
}

module.exports = {
  getEquipinfrasAll,
  getEquipinfras,
  getOneEquipinfras,
  addEquipinfras,
  updateEquipinfras,
  deleteEquipinfras,
  getVarietyEquipinfras,
  addVarietyToEquipinfras,
  deleteVarietyOfEquipinfras,
  getEquipinfrasByName,
  getEquipinfrasByNameAndStatus,
  getOneEquipinfrasCatalogue
}
