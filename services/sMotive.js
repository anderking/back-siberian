'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getMotives () {
  const Motives = await models.Motive.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
    order: [
      ['id', 'asc']
    ]
  })
  if (!Motives || !Motives.length) { throwError('motive02') }
  return Motives
}

async function getMotive (id) {
  const Motive = await models.Motive.findOne({ where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } } })
  if (!Motive) throwError('motive01')
  return Motive
}

async function addMotive (data) {
  const newMotive = await models.sequelize.transaction(async transaction => {
    const Motive = await models.Motive.create(data)
    return Motive
  })
  return getMotive(newMotive.id)
}

async function updateMotive (id, data) {
  const MotiveOld = await getMotive(id)
  return MotiveOld.update(data)
}

async function deleteMotive (id) {
  const MotiveOld = await getMotive(id)
  await MotiveOld.update({ status: 'deleted' })
}

module.exports = {
  getMotives,
  getMotive,
  addMotive,
  updateMotive,
  deleteMotive
}
//  include: [{ all: true, nested: true }],
