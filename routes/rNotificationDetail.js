'use strict'

const cNotificationDetail = require('../controllers/cNotificationDetail')
const verifyToken = require('../middlewares/verifyToken')

var app = require('express')
var router = app.Router()

router.post('/', verifyToken, cNotificationDetail.addNotificationDetail)
router.put('/:id', verifyToken, cNotificationDetail.updateNotificationDetail)
router.delete('/:id', verifyToken, cNotificationDetail.deleteNotificationDetail)
router.get('/', verifyToken, cNotificationDetail.getNotificationDetails)
router.get('/:id', verifyToken, cNotificationDetail.getNotificationDetail)
router.put('/:id/status/:status', verifyToken, cNotificationDetail.changeStatus)

module.exports = router
