var express = require('express')
var cPromotion = require('../controllers/cPromotion')
const verifyToken = require('../middlewares/verifyToken')

var router = express.Router()

router.get('/', verifyToken, cPromotion.getPromotions)
router.get('/:id', verifyToken, cPromotion.getPromotion)
router.get('/subcategory/:id', verifyToken, cPromotion.getPromotionsBySubcategory)
router.get('/equipinfras/:eid/user/:uid', verifyToken, cPromotion.getPromotionsByEquipinfrasAndUser)
router.get('/equipinfras/:eid', verifyToken, cPromotion.getPromotionsByEquipinfras)
router.post('/', verifyToken, cPromotion.addPromotion)
router.put('/:id', verifyToken, cPromotion.updatePromotion)
router.delete('/:id', verifyToken, cPromotion.deletePromotion)
router.put('/:id/parameter', verifyToken, cPromotion.setParameters)

module.exports = router
