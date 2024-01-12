'use strict'
const models = require('../models')
const { throwError } = require('../global/helpers')

async function getParameters () {
  const Parameters = await models.Parameter.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      { model: models.Group },
      { model: models.User, require: false },
      { model: models.Promotion, require: false }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Parameters || !Parameters.length) { throwError('parameter02') }
  return Parameters
}

async function getParameter (id) {
  const Parameter = await models.Parameter.findOne({
    where: { id, status: { [models.Sequelize.Op.ne]: 'deleted' } },
    include: [
      { model: models.Group },
      { model: models.User, require: false },
      { model: models.Promotion, require: false }
    ]
  })
  if (!Parameter) throwError('parameter01')
  return Parameter
}

async function addParameter (data) {
  const newParameter = await models.Parameter.create(data)
  return getParameter(newParameter.id)
}

async function updateParameter (id, data) {
  const oldParameter = await getParameter(id)
  return oldParameter.update(data)
}

async function deleteParameter (id) {
  const oldParameter = await getParameter(id)
  await oldParameter.update({ status: 'deleted' })
}

module.exports = {
  getParameters,
  getParameter,
  addParameter,
  updateParameter,
  deleteParameter
}
//  include: [{ all: true, nested: true }],
