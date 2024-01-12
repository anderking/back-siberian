var express = require('express')
var cVariety = require('../controllers/cVariety')
const verifyToken = require('../middlewares/verifyToken')
var router = express.Router()

router.get('/', verifyToken, cVariety.getVarieties)
router.get('/:id', verifyToken, cVariety.getVariety)
router.post('/', verifyToken, cVariety.addVariety)
router.put('/:id', verifyToken, cVariety.updateVariety)
router.delete('/:id', verifyToken, cVariety.deleteVariety)

module.exports = router
