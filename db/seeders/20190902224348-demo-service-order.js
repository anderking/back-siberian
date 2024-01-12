'use strict'

const Revision = require('../../models').Revision

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const revisions = await Revision.findAll({
			where: {
				status: 'finalized'
			}
		})

    return queryInterface.bulkInsert('ServiceOrders', [{
    	amount: 250000,
    	code: 'SIB' + Date.now().toString() + '1',
    	warrantyTime: 15,
    	RevisionId: revisions[0].id,
    	createdAt: new Date(),
    	updatedAt: new Date(),
    	status: 'approved'
    }, {
    	amount: 150000,
    	code: 'SIB' + Date.now().toString() + '2',
    	warrantyTime: 30,
    	RevisionId: revisions[1].id,
    	createdAt: new Date(),
    	updatedAt: new Date(),
    	status: 'completed'
    }, {
    	amount: 500000,
    	code: 'SIB' + Date.now().toString() + '3',
    	warrantyTime: 30,
    	RevisionId: revisions[2].id,
    	createdAt: new Date(),
    	updatedAt: new Date(),
    	status: 'budgeted'
		},{
    	amount: 550000,
    	code: 'SIB' + Date.now().toString() + '4',
    	warrantyTime: 30,
    	RevisionId: revisions[3].id,
    	createdAt: new Date(),
    	updatedAt: new Date(),
    	status: 'warranty'
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceOrders', null, {})
  }
};
