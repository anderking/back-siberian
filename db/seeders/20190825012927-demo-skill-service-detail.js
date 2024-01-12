'use strict'

const Skill = require('../../models').Skill
const ServiceDetail = require('../../models').ServiceDetail

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const skills = await Skill.findAll()
    const serviceDetails = await ServiceDetail.findAll()

    return queryInterface.bulkInsert('SkillsServiceDetails', [
      {
        ServiceDetailId: serviceDetails[0].id,
        SkillId: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[0].id,
        SkillId: skills[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ServiceDetailId: serviceDetails[1].id,
        SkillId: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SkillsServiceDetails', null, {})
  }
};
