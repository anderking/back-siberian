'use strict';

const models = require('../../models')
const Promotion = models.Promotion
const Parameter = models.Parameter

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const promotions = await Promotion.findAll()
    const parameters = await Parameter.findAll()
    return queryInterface.bulkInsert('PromotionParameters', [
      {
        PromotionId: promotions[0].id,
        ParameterId: parameters[0].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PromotionId: promotions[0].id,
        ParameterId: parameters[3].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PromotionId: promotions[1].id,
        ParameterId: parameters[4].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PromotionId: promotions[2].id,
        ParameterId: parameters[0].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PromotionId: promotions[2].id,
        ParameterId: parameters[1].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PromotionId: promotions[3].id,
        ParameterId: parameters[5].id,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PromotionParameters', null, {})
  }
};