'use strict'

const Revision = require('../../models').Revision
const ServiceOrderDetail = require('../../models').ServiceOrderDetail

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const revisions = await Revision.findAll()
    const serviceOrderDetail = await ServiceOrderDetail.findAll()

    return queryInterface.bulkInsert('Calendars', [
      {
        type: 'revision',
        RevisionId: revisions[0].id,
        date: '2019-11-01',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[1].id,
        date: '2019-11-01',
        turn: 'afternoon',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[2].id,
        date: '2019-11-01',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[3].id,
        date: '2019-11-02',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[4].id,
        date: '2019-11-02',
        turn: 'afternoon',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[5].id,
        date: '2019-11-03',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[6].id,
        date: '2019-11-04',
        turn: 'afternoon',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[7].id,
        date: '2019-11-05',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[8].id,
        date: '2019-11-06',
        turn: 'afternoon',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[9].id,
        date: '2019-11-07',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'serviceOrderDetail',
        ServiceOrderDetailId: serviceOrderDetail[0].id,
        date: '2019-11-15',
        turn: 'afternoon',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'serviceOrderDetail',
        ServiceOrderDetailId: serviceOrderDetail[1].id,
        date: '2019-11-16',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'revision',
        RevisionId: revisions[10].id,
        date: '2019-11-25',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'serviceOrderDetail',
        ServiceOrderDetailId: serviceOrderDetail[3].id,
        date: '2019-11-26',
        turn: 'morning',
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Calendars', null, {})
  }
};
