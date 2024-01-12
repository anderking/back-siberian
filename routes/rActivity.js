'use strict'

var express = require('express')
var cActivity = require('../controllers/cActivity')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', verifyToken, cActivity.getActivity)
router.get('/', verifyToken, cActivity.getActivities)
router.post('/', verifyToken, cActivity.createActivity)
router.put('/:id', verifyToken, cActivity.updateActivity)
router.delete('/:id', verifyToken, cActivity.deleteActivity)

module.exports = router
