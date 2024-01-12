'use strict'

module.exports = {
  getCalendariesAll,
  getCalendarByDates,
  getLenderCalendarByDates,
  getLenderCalendars,
  getLendersCalendarByDateAndTurn,
  addCalendar,
  deleteCalendar,
  getLenderCalendar,
  executeCalendar,
  addReCalendar
}

const models = require('../models')
const { throwError } = require('../global/helpers')
const sBitacora = require('../services/sBitacora')
const sRevision = require('../services/sRevision')
const sServiceOrder = require('../services/sServiceOrder')

async function getCalendariesAll () {
  const Calendaries = await models.Calendar.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'cancel' } },
    include: [
      { model: models.LenderCalendar,
        required: false,
        include: [{ model: models.User, required: true, attributes: { exclude: ['password'] } }]
      },
      { model: models.Revision,
        required: false,
        include: [{ model: models.VarietyDetail, required: true }]
      },
      { model: models.ServiceOrderDetail,
        required: false,
        include: [
          { model: models.ServiceOrder, required: true },
          { model: models.ServiceDetail, required: true }
        ]
      }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Calendaries || !Calendaries.length) { throwError('Calendar01') }
  return Calendaries
}

async function getCalendarByDates (startDate, endDate) {
  const Calendaries = await models.Calendar.findAll({
    where: { date: { [models.Sequelize.Op.between]: [startDate, endDate] }, status: 'booked' },
    include: [
      { model: models.LenderCalendar,
        required: false,
        include: [{ model: models.User, required: true, attributes: { exclude: ['password'] } }]
      },
      { model: models.Revision,
        required: false,
        include: [{ model: models.VarietyDetail, required: true }]
      },
      { model: models.ServiceOrderDetail,
        required: false,
        include: [
          { model: models.ServiceOrder, required: true },
          { model: models.ServiceDetail, required: true }
        ]
      }
    ],
    order: [
      ['id', 'ASC']
    ]
  })
  if (!Calendaries || !Calendaries.length) { throwError('Calendar01') }
  return Calendaries
}

async function getLenderCalendarByDates (lenderId, startDate, endDate) {
  const lenderCalendaries = await models.User.findByPk(lenderId, {
    attributes: {
      exclude: ['password']
    },
    include: [
      { model: models.LenderCalendar,
        required: true,
        include: [
          { model: models.Calendar,
            required: true,
            where: { date: { [models.Sequelize.Op.between]: [startDate, endDate] }, status: 'booked' },
            include: [
              { model: models.Revision,
                required: false,
                include: [{ model: models.VarietyDetail, required: true }]
              },
              { model: models.ServiceOrderDetail,
                required: false,
                include: [
                  { model: models.ServiceOrder, required: true },
                  { model: models.ServiceDetail, required: true }
                ]
              }]
          }],
        order: [
          ['date', 'ASC']
        ]
      }]
  })
  if (!lenderCalendaries) { throwError('Calendar01') }
  return lenderCalendaries
}

async function getLendersCalendarByDateAndTurn (date, turn) {
  const lendersCalendar = await models.User.findAll({
    attributes: { exclude: ['password'] },
    include: [
      { model: models.Role, where: { name: 'Prestador' } },
      { model: models.Skill },
      { model: models.LenderCalendar,
        required: false,
        include: [
          { model: models.Calendar,
            required: true,
            where: { date: date, turn: turn, status: 'booked' }
          }],
        order: [['date', 'ASC']]
      }]
  })
  if (!lendersCalendar) { throwError('Calendar04') }
  lendersCalendar.forEach(lender => {
    if (lender.LenderCalendars.length > 0) lendersCalendar.splice(lender, 1)
  })
  return lendersCalendar
}

async function getLenderCalendars (lenderId) {
  const LenderCalendars = await models.User.findByPk(lenderId, {
    attributes: { exclude: ['password'] },
    include: [{
      model: models.LenderCalendar,
      required: true,
      include: [
        { model: models.Calendar,
          required: true,
          where: { status: 'booked' },
          include: [
            { model: models.Revision,
              required: false,
              include: [{ model: models.VarietyDetail, required: true }]
            },
            { model: models.ServiceOrderDetail,
              required: false,
              include: [
                { model: models.ServiceOrder, required: true },
                { model: models.ServiceDetail, required: true }
              ]
            }]
        }],
      order: [['date', 'ASC']]
    }]
  })
  if (!LenderCalendars) { throwError('Calendar01') }
  return LenderCalendars
}

async function addCalendar (data, idRevisionOrServiceOrder, type) {
  if (!data) throwError('Calendar03')
  var calendarSave

  for (let i = 0; i < data.length; i++) {
    const lenderCalendaries = await dateLenderCalendarValidate(data[i].LenderId, data[i].date, data[i].turn)

    if (lenderCalendaries.length) { throwError('Calendar02') } else {
      calendarSave = await models.sequelize.transaction(async transaction => {
        if (data[i].type === 'revision') {
          return models.Calendar.build({
            type: data[i].type,
            RevisionId: idRevisionOrServiceOrder,
            date: data[i].date,
            turn: data[i].turn,
            status: 'booked'
          }).save()
        } else {
          return models.Calendar.build({
            type: data[i].type,
            ServiceOrderDetailId: idRevisionOrServiceOrder,
            date: data[i].date,
            turn: data[i].turn,
            status: 'booked'
          }).save()
        }
      })

      await models.LenderCalendar.build({
        CalendarId: calendarSave.id,
        UserId: data[i].LenderId,
        status: 'booked'
      }).save()
    }
  }

  if (calendarSave.type === 'serviceOrderDetail') {
    if (type === 'calendar') {
      await sBitacora.addBitacora({ type: 'serviceOrder', eventType: 'schedule', ServiceOrderId: idRevisionOrServiceOrder })
    }
    return sServiceOrder.getServiceOrderById(idRevisionOrServiceOrder)
  } else return sRevision.getRevisionById(calendarSave.RevisionId) // getLenderCalendar(bookLenderCalendar.UserId, calendarSave.id)
}

function dateLenderCalendarValidate (lenderId, dateCalendar, turnCalendar) {
  const lenderCalendaries = models.Calendar.findAll({
    where: { date: dateCalendar, turn: turnCalendar, status: 'booked' },
    include: [
      { model: models.LenderCalendar,
        required: true,
        include: [{ model: models.User, required: true, where: { id: lenderId } }]
      }]
  })
  // validar que el calendar de revisionId o el ServiceOrderDetailId no tengan status book, no dejar agendar.. se debe cancelar la cita para ello
  return lenderCalendaries
}

async function getLenderCalendar (lenderId, calendarId) {
  const Calendar = await models.Calendar.findByPk(calendarId, {
    where: { status: 'booked' },
    include: [
      { model: models.LenderCalendar,
        where: { UserId: lenderId },
        include: [{ model: models.User, attributes: { exclude: ['password'] } }]
      },
      { model: models.Revision, required: false },
      { model: models.ServiceOrderDetail, required: false }
    ]
  })
  if (!Calendar) throwError('Calendar01')
  return Calendar
}

async function getCalendar (calendarId) {
  const Calendar = await models.Calendar.findByPk(calendarId, {
    where: { status: 'booked' },
    include: [
      { model: models.LenderCalendar,
        include: [{ model: models.User, attributes: { exclude: ['password'] } }]
      },
      { model: models.Revision, required: false },
      { model: models.ServiceOrderDetail, required: false }
    ]
  })
  if (!Calendar) throwError('Calendar01')
  return Calendar
}

async function getCalendarWhitoutStatus (calendarId) {
  const Calendar = await models.Calendar.findByPk(calendarId)
  if (!Calendar) throwError('Calendar01')
  return Calendar
}

async function deleteCalendar (calendarId) {
  const calendarSearch = await getCalendar(calendarId)
  if (!calendarSearch || calendarSearch.length === 0) throwError('Calendar05')
  else if (calendarSearch.status === 'executed') throwError('Calendar07')
  else if (calendarSearch.status === 'cancel') throwError('Calendar08')
  else if (calendarSearch.status === 'booked') {
    await calendarSearch.update({ status: 'cancel' })
    await calendarSearch.LenderCalendars.forEach(LenderCalendars => {
      LenderCalendars.update({ status: 'cancel' })
    })
  }
}

async function executeCalendar (calendarId, serviceOrderId) {
  const CalendarOld = await getCalendar(calendarId)
  await CalendarOld.update({ status: 'executed' })
  await CalendarOld.LenderCalendars.forEach(LenderCalendars => {
    LenderCalendars.update({ status: 'executed' })
  })
  if (CalendarOld.type === 'serviceOrderDetail') {
    const validate = await validateExecuteServiceOrder(calendarId)
    if (validate) {
      await sBitacora.addBitacora({
        type: 'serviceOrder',
        eventType: 'execution',
        ServiceOrderId: serviceOrderId
      })
      return sServiceOrder.getServiceOrderById(serviceOrderId)
    } else return getCalendar(calendarId)
  }
}

async function validateExecuteServiceOrder (calendarId) {
  var calendarSearch = []
  calendarSearch = await getCalendarWhitoutStatus(calendarId)
  console.log(calendarSearch)
  if (!calendarSearch || calendarSearch.length === 0) return false
  return true
}

async function addReCalendar (calendarId, data, idRevisionOrServiceOrder) {
  var calendarSearch = []
  calendarSearch = await getCalendarWhitoutStatus(calendarId)
  if (!calendarSearch || calendarSearch.length === 0) throwError('Calendar05')
  else if (calendarSearch.status === 'executed') throwError('Calendar09')
  else if (calendarSearch.status === 'booked') throwError('Calendar10')
  else if (calendarSearch.status === 'cancel') {
    await addCalendar(data, idRevisionOrServiceOrder, 'recalendar')
    if (calendarSearch.type === 'serviceOrderDetail') {
      return sServiceOrder.getServiceOrderById(idRevisionOrServiceOrder)
    } else return sRevision.getRevisionById(calendarSearch.RevisionId) // getLenderCalendar(bookLenderCalendar.UserId, calendarSave.id)
  }
}

// add the same caledar of revision or serviceorder to one o more lenders
