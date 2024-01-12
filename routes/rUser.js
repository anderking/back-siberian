'use strict'

const cUser = require('../controllers/cUser')
const verifyToken = require('../middlewares/verifyToken')

var app = require('express')
var router = app.Router()

router.post('/register', cUser.addClient)
router.post('/login', cUser.login)

router.post('/', verifyToken, cUser.addUser)
router.put('/:id', verifyToken, cUser.updateUser)

router.get('/', verifyToken, cUser.getUsers)
router.get('/:id', verifyToken, cUser.getUser)
router.get('/:id/function', verifyToken, cUser.getUserFunctions)

router.delete('/:id', verifyToken, cUser.deleteUser)
router.put('/:id/inactivate', verifyToken, cUser.inactivateUser)
router.put('/:id/activate', verifyToken, cUser.activateUser)

router.put('/:uid/role/:rid', verifyToken, cUser.changeRole)
router.get('/roles/:id', verifyToken, cUser.getUsersByRole)
router.get('/status/:status', verifyToken, cUser.getUsersByStatus)

router.put('/:id/parameter', verifyToken, cUser.setParameters)

router.put('/:id/android', verifyToken, cUser.setAndroidId)

module.exports = router
