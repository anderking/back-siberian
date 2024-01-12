var express = require('express')
var cParameter = require('../controllers/cParameter')
const verifyToken = require('../middlewares/verifyToken')

var router = express.Router()

router.get('/', verifyToken, cParameter.getParameters)
router.get('/:id', verifyToken, cParameter.getParameter)
router.post('/', verifyToken, cParameter.addParameter)
router.put('/:id', verifyToken, cParameter.updateParameter)
router.delete('/:id', verifyToken, cParameter.deleteParameter)

module.exports = router
