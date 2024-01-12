'use strict'

var express = require('express')
var cQuestion = require('../controllers/cQuestion')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/:id', verifyToken, cQuestion.getQuestion)
router.get('/', verifyToken, cQuestion.getQuestions)
router.get('/client/all', verifyToken, cQuestion.getQuestionsByClient)
router.get('/lender/all', verifyToken, cQuestion.getQuestionsByLender)
router.get('/service/all', verifyToken, cQuestion.getQuestionsByService)
router.post('/', verifyToken, cQuestion.createQuestion)
router.put('/:id', verifyToken, cQuestion.updateQuestion)
router.delete('/:id', verifyToken, cQuestion.deleteQuestion)

module.exports = router
