'use strict'

var express = require('express')
var cSkill = require('../controllers/cSkill')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', verifyToken, cSkill.getSkill)
router.get('/', verifyToken, cSkill.getSkills)
router.post('/', verifyToken, cSkill.createSkill)
router.put('/:id', verifyToken, cSkill.updateSkill)
router.delete('/:id', verifyToken, cSkill.deleteSkill)
router.get('/users/service', verifyToken, cSkill.getUsersBySkillsRequired)

module.exports = router
