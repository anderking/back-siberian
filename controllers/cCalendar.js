'use strict'

const sCalendar = require('../services/sCalendar')
const response = require('../global/responses')

async function getCaledaries (req, res) {
  try {
    const calendaries = await sCalendar.getCalendariesAll()
    response.makeResponseOk(res, { calendaries }, 'calendar/listCalendaries')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getCaledariesByDates (req, res) {
  try {
    const startDate = req.params.sDate
    const endDate = req.params.eDate
    const calendaries = await sCalendar.getCalendarByDates(startDate, endDate)
    response.makeResponseOk(res, { calendaries }, 'calendar/listCalendaries')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getLenderCalendarByDates (req, res) {
  try {
    const lenderId = req.params.lenderId
    const startDate = req.params.sDate
    const endDate = req.params.eDate
    const lenderCalendaries = await sCalendar.getLenderCalendarByDates(lenderId, startDate, endDate)
    response.makeResponseOk(res, { lenderCalendaries }, 'calendar/listLenderCalendaries')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getLendersCalendarByDateAndTurn (req, res) {
  try {
    const date = req.params.date
    const turn = req.params.turn
    const lendersCalendar = await sCalendar.getLendersCalendarByDateAndTurn(date, turn)
    response.makeResponseOk(res, { lendersCalendar }, 'calendar/listLendersFree')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getLenderCalendars (req, res) {
  try {
    const lenderId = req.params.lenderId
    const lenderCalendaries = await sCalendar.getLenderCalendars(lenderId)
    response.makeResponseOk(res, { lenderCalendaries }, 'calendar/listLenderCalendaries')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addCalendar (req, res) {
  try {
    const body = req.body
    const serviceOrder = await sCalendar.addCalendar(body.calendars, body.ServicerOrderId, 'calendar')
    response.makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'createdF', 'Agenda')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addReCalendar (req, res) {
  try {
    const body = req.body
    await sCalendar.addReCalendar(req.params.id, body.calendars, body.RevisionOrServicerOrderId)
    response.makeResponseOkMessage(res, 'createdM', 'Calendario Re')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function deleteCalendar (req, res) {
  try {
    const id = req.params.id
    await sCalendar.deleteCalendar(id)
    response.makeResponseOkMessage(res, 'deletedM', 'Calendario')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function executeCalendar (req, res) {
  try {
    const serviceOrder = await sCalendar.executeCalendar(req.params.id, req.body.ServicerOrderId)
    // res.status(200).send({ calendar })
    response.makeResponseOk(res, { serviceOrder }, 'serviceOrder/single', 'createdM', 'Ejecucion Detalle Orden de Servicio')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getCaledaries,
  getCaledariesByDates,
  getLendersCalendarByDateAndTurn,
  getLenderCalendarByDates,
  getLenderCalendars,
  addCalendar,
  deleteCalendar,
  executeCalendar,
  addReCalendar
}
