'use strict'

var express = require('express')
var cReport = require('../controllers/cReport')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/serviceDetails', verifyToken, cReport.getServiceDetails)

module.exports = router
