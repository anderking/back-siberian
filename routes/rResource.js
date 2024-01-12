'use strict'

var express = require('express')
var cResource = require('../controllers/cResource')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', verifyToken, cResource.getResource)
router.get('/', verifyToken, cResource.getResources)
router.post('/', verifyToken, cResource.createResource)
router.put('/:id', verifyToken, cResource.updateResource)
router.delete('/:id', verifyToken, cResource.deleteResource)
router.get('/by/ids', verifyToken, cResource.getResourcesByIds)

module.exports = router
