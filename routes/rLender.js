'use strict'

const cUser = require('../controllers/cUser')
const verifyToken = require('../middlewares/verifyToken')

var app = require('express')
var router = app.Router()

router.put('/:id', verifyToken, cUser.setSkills)
router.get('/', verifyToken, cUser.getLenders)
router.get('/:id', verifyToken, cUser.getLender)
router.get('/availability/:id', verifyToken, cUser.getLenderAvailability)

module.exports = router
