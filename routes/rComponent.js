'use strict'

var express = require('express')
var cComponent = require('../controllers/cComponent')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', verifyToken, cComponent.getComponent)
router.get('/', verifyToken, cComponent.getComponents)
router.post('/', verifyToken, cComponent.createComponent)
router.put('/:id', verifyToken, cComponent.updateComponent)
router.delete('/:id', verifyToken, cComponent.deleteComponent)

module.exports = router
