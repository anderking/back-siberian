'use strict'

var express = require('express')
var cServiceOrder = require('../controllers/cServiceOrder')
var router = express.Router()
const upload = require('../middlewares/upload')
const verifyToken = require('../middlewares/verifyToken')
const uploadToImages = upload.fields([{ name: 'imagePaymentUrl', maxCount: 1 }, { name: 'imageClaimUrl', maxCount: 1 }])

router.get('/:id', verifyToken, cServiceOrder.getServiceOrder)
router.get('/', verifyToken, cServiceOrder.getServiceOrders)
router.post('/', [verifyToken, upload.single('imagePaymentUrl')], cServiceOrder.createServiceOrder)
router.put('/:id', [verifyToken, uploadToImages], cServiceOrder.updateServiceOrder)
router.put('/:id/approve', verifyToken, cServiceOrder.approveServiceOrder)
router.put('/:id/reject/:motiveId', verifyToken, cServiceOrder.rejectServiceOrder)
router.put('/:id/warranty', verifyToken, cServiceOrder.warrantyServiceOrder)
router.put('/:id/completed', verifyToken, cServiceOrder.completedServiceOrder)
router.delete('/:id', verifyToken, cServiceOrder.cancelServiceOrder)
router.get('/user/:userId', verifyToken, cServiceOrder.getServiceOrdersByUser)
router.get('/lender/:lenderId', verifyToken, cServiceOrder.getServiceOrdersByLender)
router.put('/:id/activities', verifyToken, cServiceOrder.markActivities)

module.exports = router
