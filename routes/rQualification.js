'use strict'

var express = require('express')
var cQualification = require('../controllers/cQualification')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', verifyToken, cQualification.getQualification)
router.get('/user/:userId', verifyToken, cQualification.getQualificationByUser)
router.get('/serviceDetail/:serviceDetailId', verifyToken, cQualification.getQualificationByServiceDetail)
router.post('/', verifyToken, cQualification.createQualification)
router.put('/:id', verifyToken, cQualification.updateQualification)
router.delete('/:id', verifyToken, cQualification.deleteQualification)

module.exports = router
