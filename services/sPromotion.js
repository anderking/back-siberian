'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getPromotions () {
  const Promotions = await models.Promotion.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      { model: models.Equipinfras, require: false },
      { model: models.Subcategory, require: false },
      { model: models.Parameter, require: false }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Promotions || !Promotions.length) { throwError('promotion02') }
  return Promotions
}

async function getPromotion (id) {
  const Promotion = await models.Promotion.findOne({
    where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      { model: models.Equipinfras, require: false },
      { model: models.Subcategory, require: false },
      { model: models.Parameter, require: false }
    ]
  })
  if (!Promotion) throwError('promotion01')
  return Promotion
}

async function getPromotionsBySubcategory (subcategoryId) {
  const Promotions = await models.Promotion.findAll({
    where:
    {
      SubcategoryId: subcategoryId,
      status: { [models.Sequelize.Op.ne]: 'deleted' }
    },
    include: [
      { model: models.Equipinfras, require: false },
      { model: models.Subcategory, require: false },
      { model: models.Parameter, require: false }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Promotions || !Promotions.length) { throwError('promotion04') }
  return Promotions
}

async function getPromotionsByEquipinfrasAndUserParameters (equipinfrasId, userId) {
  const user = await models.User.findByPk(userId, {
    include: [{
      model: models.Parameter,
      attributes: ['id'] }
    ]
  })

  const arrayIds = []
  user.Parameters.forEach(p => {
    arrayIds.push(p.id)
  })

  const Promotions = await models.Promotion.findAll({
    where:
    {
      EquipinfraId: equipinfrasId,
      status: { [models.Sequelize.Op.ne]: 'deleted' }
    },
    include: [
      { model: models.Equipinfras, require: false },
      { model: models.Subcategory, require: false },
      {
        model: models.Parameter,
        where: {
          id: { [models.Sequelize.Op.in]: arrayIds }
        }
      }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Promotions || !Promotions.length) { throwError('promotion06') }
  return Promotions
}

async function getPromotionsByEquipinfras (equipinfrasId) {
  const Promotions = await models.Promotion.findAll({
    where:
    {
      EquipinfraId: equipinfrasId,
      status: { [models.Sequelize.Op.ne]: 'deleted' }
    },
    include: [
      { model: models.Equipinfras, require: false },
      { model: models.Subcategory, require: false },
      { model: models.Parameter, require: false }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Promotions || !Promotions.length) { throwError('promotion05') }
  return Promotions
}

async function addPromotion (data) {
  const newPromotion = await models.Promotion.create(data)
  return getPromotion(newPromotion.id)
}

async function updatePromotion (id, data) {
  const oldPromotion = await getPromotion(id)
  return oldPromotion.update(data)
}

async function deletePromotion (id) {
  const oldPromotion = await getPromotion(id)
  await oldPromotion.update({ status: 'deleted' })
}

async function getPromotionByID (id) {
  const promotion = await models.Promotion.findByPk(id, {
    include: [models.Parameter]
  })
  return promotion
}

async function setPromotionParameters (id, data) {
  const promotion = await getPromotionByID(id)

  if (promotion.type !== 'target') {
    throwError('promotion03')
  }

  await promotion.setParameters(data.parameters)

  return getPromotion(promotion.id)
}

module.exports = {
  getPromotions,
  getPromotion,
  addPromotion,
  updatePromotion,
  deletePromotion,
  setPromotionParameters,
  getPromotionsBySubcategory,
  getPromotionsByEquipinfrasAndUserParameters,
  getPromotionsByEquipinfras
}
//  include: [{ all: true, nested: true }],
