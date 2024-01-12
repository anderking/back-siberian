'use strict'

const cRole = require('../controllers/cRole')
const verifyToken = require('../middlewares/verifyToken')

var app = require('express')
var router = app.Router()

router.post('/', verifyToken, cRole.addRole)
router.put('/:id', verifyToken, cRole.updateRole)
router.delete('/:id', verifyToken, cRole.deleteRole)
router.get('/', verifyToken, cRole.getRoles)
router.get('/:id', verifyToken, cRole.getRole)
router.put('/:id/status/:status', verifyToken, cRole.changeStatus)
router.put('/:id/functions', verifyToken, cRole.updateFunctions)

module.exports = router
