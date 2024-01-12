'use strict'

var express = require('express')
var cRevision = require('../controllers/cRevision')
var router = express.Router()
const upload = require('../middlewares/upload')
const verifyToken = require('../middlewares/verifyToken')
const uploadToImages = upload.fields([{ name: 'imageRequestUrl', maxCount: 1 }, { name: 'imageRevisionUrl', maxCount: 1 }])

router.get('/:id', verifyToken, cRevision.getRevision)
router.get('/', verifyToken, cRevision.getRevisions)
router.post('/', [verifyToken, upload.single('imageRequestUrl')], cRevision.createRevision)
router.put('/:id', [verifyToken, uploadToImages], cRevision.updateRevision)
router.put('/:id/approve', verifyToken, cRevision.approveRevision)
router.put('/:id/reject/:motiveId', verifyToken, cRevision.rejectRevision)
router.put('/:id/diagnose', [verifyToken, upload.single('imageRevisionUrl')], cRevision.diagnoseRevision)
router.delete('/:id', verifyToken, cRevision.cancelRevision)
router.get('/user/:userId', verifyToken, cRevision.getRevisionsByUser)
router.get('/lender/:lenderId', verifyToken, cRevision.getRevisionsByLender)
router.put('/:id/irreparable/:motiveId', verifyToken, cRevision.irreparableRevision)
router.post('/warranty/:serviceOrderId', [verifyToken, upload.single('imageRequestUrl')], cRevision.createWarrantyRevision)
router.get('/warranty/all', verifyToken, cRevision.getAllWarrantyRevision)
router.get('/warranty/lender/:lenderId', verifyToken, cRevision.getAllWarrantyRevisionsByLender)
router.get('/warranty/user/:userId', verifyToken, cRevision.getAllWarrantyRevisionsByUser)

module.exports = router
