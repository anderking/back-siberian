'use strict'

var express = require('express')
var cCalendar = require('../controllers/cCalendar')
var router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.get('/', verifyToken, cCalendar.getCaledaries)
router.get('/:sDate/:eDate', verifyToken, cCalendar.getCaledariesByDates)
router.get('/lendersFree/:date/:turn', verifyToken, cCalendar.getLendersCalendarByDateAndTurn)
router.get('/:lenderId/:sDate/:eDate', verifyToken, cCalendar.getLenderCalendarByDates)
router.get('/:lenderId', verifyToken, cCalendar.getLenderCalendars)
router.post('/', verifyToken, cCalendar.addCalendar)
router.put('/:id/execute', verifyToken, cCalendar.executeCalendar)
router.put('/:id/recreate', verifyToken, cCalendar.addReCalendar)
router.delete('/:id', verifyToken, cCalendar.deleteCalendar)
module.exports = router
