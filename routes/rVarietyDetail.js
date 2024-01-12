var express = require('express')
var cVarietyDetail = require('../controllers/cVarietyDetail')
const verifyToken = require('../middlewares/verifyToken')
var router = express.Router()

router.post('/', verifyToken, cVarietyDetail.addVarietyDetail)
router.put('/:id', verifyToken, cVarietyDetail.updateVarietyDetail)
router.delete('/:id', verifyToken, cVarietyDetail.deleteVarietyDetail)
router.get('/:id', verifyToken, cVarietyDetail.getVarietyDetail)
router.get('/:id/service', verifyToken, cVarietyDetail.getServiceDetails)
router.put('/:id/service', verifyToken, cVarietyDetail.setServiceDetails)

module.exports = router
