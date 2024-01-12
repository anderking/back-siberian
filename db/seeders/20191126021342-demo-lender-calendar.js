'use strict'

const Calendar = require('../../models').Calendar
const User = require('../../models').User

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const calendars = await Calendar.findAll()
    const users = await Calendar.findAll()

    return queryInterface.bulkInsert('LenderCalendars', [
      {
        CalendarId: calendars[0].id,
        UserId: users[1].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[1].id,
        UserId: users[1].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[2].id,
        UserId: users[3].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[3].id,
        UserId: users[4].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[4].id,
        UserId: users[5].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[5].id,
        UserId: users[6].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[6].id,
        UserId: users[7].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[7].id,
        UserId: users[8].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[8].id,
        UserId: users[9].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[9].id,
        UserId: users[1].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[10].id,
        UserId: users[1].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[11].id,
        UserId: users[1].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[12].id,
        UserId: users[3].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CalendarId: calendars[13].id,
        UserId: users[1].id,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LenderCalendarss', null, {})
  }
};
