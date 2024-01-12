var express = require('express')
var cGroup = require('../controllers/cGroup')
const verifyToken = require('../middlewares/verifyToken')

var router = express.Router()

router.get('/', verifyToken, cGroup.getGroups)
router.get('/:id', verifyToken, cGroup.getGroup)
router.post('/', verifyToken, cGroup.addGroup)
router.put('/:id', verifyToken, cGroup.updateGroup)
router.delete('/:id', verifyToken, cGroup.deleteGroup)

module.exports = router
