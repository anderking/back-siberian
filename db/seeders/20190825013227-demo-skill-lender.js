'use strict'

const Skill = require('../../models').Skill
const User = require('../../models').User
const Role = require('../../models').Role

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const lender_role = await Role.findAll({ limit: 1, where: { name: "Prestador" } })
    const skills = await Skill.findAll()
    const lenders = await User.findAll({ where: { RoleId: lender_role[0].id, status: 'active' } })

		var toInsert = []
		lenders.forEach(lender => {
			toInsert.push({
        UserId: lender.id,
				SkillId: skills[0].id,
				experienceYears: 2,
        createdAt: new Date(),
        updatedAt: new Date()
			})
		})

    return queryInterface.bulkInsert('SkillsLenders', [...toInsert,
      {
        UserId: lenders[0].id,
        SkillId: skills[1].id,
				experienceYears: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        UserId: lenders[0].id,
        SkillId: skills[2].id,
				experienceYears: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SkillsLenders', null, {})
  }
};
