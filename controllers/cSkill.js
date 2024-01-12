'use strict'

const sSkill = require('../services/sSkill')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createSkill (req, res) {
  try {
    const skill = await sSkill.createSkill(req.body)

    makeResponseOk(res, { skill }, 'skill/single', 'createdF', 'Habilidad')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateSkill (req, res) {
  try {
    const skill = await sSkill.updateSkill(req.params.id, req.body)

    makeResponseOk(res, { skill }, 'skill/single', 'updatedF', 'Habilidad')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteSkill (req, res) {
  try {
    await sSkill.deleteSkill(req.params.id)

    makeResponseOkMessage(res, 'deletedF', 'Habilidad')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getSkill (req, res) {
  try {
    const skill = await sSkill.getSkillById(req.params.id)

    makeResponseOk(res, { skill }, 'skill/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getSkills (req, res) {
  try {
    const skills = await sSkill.getSkills()

    makeResponseOk(res, { skills }, 'skill/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getUsersBySkillsRequired (req, res) {
  try {
    const users = await sSkill.getUsersbyVarietyDetail(req.query.id)

    makeResponseOk(res, { users }, 'skill/user')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createSkill,
  updateSkill,
  deleteSkill,
  getSkill,
  getSkills,
  getUsersBySkillsRequired
}
