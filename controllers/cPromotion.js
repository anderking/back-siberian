const sPromotion = require('../services/sPromotion')
const response = require('../global/responses')

async function getPromotions (req, res) {
  try {
    const Promotions = await sPromotion.getPromotions()
    response.makeResponseOk(res, { Promotions }, 'promotion/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getPromotion (req, res) {
  try {
    const Promotion = await sPromotion.getPromotion(req.params.id)
    response.makeResponseOk(res, { Promotion }, 'promotion/single')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getPromotionsBySubcategory (req, res) {
  try {
    const Promotions = await sPromotion.getPromotionsBySubcategory(req.params.id)
    response.makeResponseOk(res, { Promotions }, 'promotion/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getPromotionsByEquipinfrasAndUser (req, res) {
  try {
    const Promotions = await sPromotion.getPromotionsByEquipinfrasAndUserParameters(req.params.eid, req.params.uid)
    response.makeResponseOk(res, { Promotions }, 'promotion/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getPromotionsByEquipinfras (req, res) {
  try {
    const Promotions = await sPromotion.getPromotionsByEquipinfras(req.params.eid)
    response.makeResponseOk(res, { Promotions }, 'promotion/many')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addPromotion (req, res) {
  try {
    const Promotion = await sPromotion.addPromotion(req.body)
    response.makeResponseOk(res, { Promotion }, 'promotion/single', 'createdF', 'Promocion')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function updatePromotion (req, res) {
  try {
    const Promotion = await sPromotion.updatePromotion(req.params.id, req.body)
    response.makeResponseOk(res, { Promotion }, 'promotion/single', 'updatedF', 'Promocion')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deletePromotion (req, res) {
  try {
    await sPromotion.deletePromotion(req.params.id)
    response.makeResponseOkMessage(res, 'deletedF', 'Promocion')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function setParameters (req, res) {
  try {
    const Promotion = await sPromotion.setPromotionParameters(req.params.id, req.body)
    response.makeResponseOk(res, { Promotion }, 'promotion/single', 'updatedF', 'Promocion')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getPromotions,
  getPromotion,
  addPromotion,
  updatePromotion,
  deletePromotion,
  setParameters,
  getPromotionsBySubcategory,
  getPromotionsByEquipinfras,
  getPromotionsByEquipinfrasAndUser
}
// res.status(200).send({ Promotions})
