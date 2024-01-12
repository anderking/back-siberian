'use strict'

var express = require('express')
var cServiceDetail = require('../controllers/cServiceDetail')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', cServiceDetail.getServiceDetail)
router.get('/', cServiceDetail.getServiceDetails)
router.post('/', verifyToken, cServiceDetail.createServiceDetail)
router.put('/:id', verifyToken, cServiceDetail.updateServiceDetail)
router.delete('/:id', verifyToken, cServiceDetail.deleteServiceDetail)

module.exports = router
