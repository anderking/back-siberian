'use strict'

const cNotification = require('../controllers/cNotification')
const verifyToken = require('../middlewares/verifyToken')

var app = require('express')
var router = app.Router()

router.put('/:id', verifyToken, cNotification.updateNotification)
router.get('/:id', verifyToken, cNotification.getNotifications)

module.exports = router
