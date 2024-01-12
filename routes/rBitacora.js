var express = require('express')
var cBitacora = require('../controllers/cBitacora')
const verifyToken = require('../middlewares/verifyToken')
var router = express.Router()

router.get('/', verifyToken, cBitacora.getBitacoras)
router.post('/', verifyToken, cBitacora.addBitacora)
router.put('/:id', verifyToken, cBitacora.cancelBitacora)

module.exports = router
