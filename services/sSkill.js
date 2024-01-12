'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createSkill (data) {
  const skill = await models.Skill.create(data)

  return getSkillById(skill.id)
}

async function updateSkill (id, data) {
  const skill = await getSkillById(id)

  return skill.update(data)
}

async function deleteSkill (id) {
  const skill = await getSkillById(id)

  return skill.update({
    status: 'deleted'
  })
}

async function getSkillById (id) {
  const skill = await models.Skill.findOne({
    where: {
      id: id
    },
    include: [{
      model: models.ServiceDetail,
      where: {
        status: 'active'
      },
      required: false
    },
    {
      model: models.User,
      attributes: {
        exclude: ['password']
      },
      through: {
        attributes: ['experienceYears']
      },
      where: {
        status: 'active'
      },
      required: false
    }
    ]
  })

  if (!skill) {
    throwError('skill01')
  }

  return skill
}

async function getSkills () {
  return models.Skill.findAll({
    include: [{
      model: models.ServiceDetail,
      where: {
        status: 'active'
      },
      required: false
    },
    {
      model: models.User,
      attributes: {
        exclude: ['password']
      },
      through: {
        attributes: ['experienceYears']
      },
      where: {
        status: 'active'
      },
      required: false
    }
    ],
    order: [
      ['status', 'ASC']
    ]
  })
}

async function getUsersbyVarietyDetail (id) {
  const skills = await models.Skill.findAll({
    include: [{
      model: models.ServiceDetail,
      where: {
        id: id,
        status: 'active'
      }
    }],
    attributes: ['id']
  })

  if (!skills.length) {
    throwError('G19')
  }

  var ids = []
  skills.forEach(skill => {
    ids.push(skill.id)
  })

  return models.User.findAll({
    where: {
      RoleId: 2,
      status: 'active'
    },
    include: [{
      model: models.Skill,
      where: {
        id: ids
      }
    }]
  })
}

module.exports = {
  createSkill,
  updateSkill,
  deleteSkill,
  getSkillById,
  getSkills,
  getUsersbyVarietyDetail
}
