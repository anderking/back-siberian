var express = require('express')
var cMotive = require('../controllers/cMotive')
const verifyToken = require('../middlewares/verifyToken')

var router = express.Router()

router.get('/', verifyToken, cMotive.getMotives)
router.get('/:id', verifyToken, cMotive.getMotive)
router.post('/', verifyToken, cMotive.addMotive)
router.put('/:id', verifyToken, cMotive.updateMotive)
router.delete('/:id', verifyToken, cMotive.deleteMotive)

module.exports = router
