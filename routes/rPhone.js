'use strict'

const cPhone = require('../controllers/cPhone')
const verifyToken = require('../middlewares/verifyToken')

var app = require('express')
var router = app.Router()

router.get('/:userId', verifyToken, cPhone.getPhones)
router.post('/:userId', verifyToken, cPhone.addPhone)
router.delete('/:id', verifyToken, cPhone.deletePhone)
router.put('/:id', verifyToken, cPhone.updatePhone)
router.post('/:userId/save', verifyToken, cPhone.savePhones)

module.exports = router
