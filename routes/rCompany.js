'use strict'

var express = require('express')
var cCompany = require('../controllers/cCompany')
var router = express.Router()
const upload = require('../middlewares/upload')
const verifyToken = require('../middlewares/verifyToken')
const uploadToCloud = require('../middlewares/uploadToCloud')

router.get('/', cCompany.getCompany)
router.get('/', verifyToken, cCompany.getCompany)
router.post('/', [verifyToken, upload.single('imageUrl')], uploadToCloud, cCompany.createCompany)
router.put('/', [verifyToken, upload.single('imageUrl')], uploadToCloud, cCompany.updateCompany)

module.exports = router
