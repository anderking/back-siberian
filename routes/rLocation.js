'use strict'

const cLocation = require('../controllers/cLocation')
const verifyToken = require('../middlewares/verifyToken')

var app = require('express')
var router = app.Router()

router.post('/', verifyToken, cLocation.addLocation)
router.delete('/:id', verifyToken, cLocation.deleteLocation)
router.get('/:userId', verifyToken, cLocation.getLocations)
router.get('/one/:id', verifyToken, cLocation.getLocation)
router.put('/:id', verifyToken, cLocation.updateLocation)

module.exports = router
