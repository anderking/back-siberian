'use strict'

var express = require('express')
var cPolicy = require('../controllers/cPolicy')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', verifyToken, cPolicy.getPolicy)
router.get('/', verifyToken, cPolicy.getPolicies)
router.post('/', verifyToken, cPolicy.createPolicy)
router.put('/:id', verifyToken, cPolicy.updatePolicy)
router.delete('/:id', verifyToken, cPolicy.deletePolicy)

module.exports = router
