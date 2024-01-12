'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createActivity (data) {
  const activity = await models.Activity.create(data)

  return getActivityById(activity.id)
}

async function updateActivity (id, data) {
  const activity = await getActivityById(id)

  return activity.update(data)
}

async function deleteActivity (id) {
  const activity = await getActivityById(id)

  return activity.update({ status: 'deleted' })
}

async function getActivityById (id) {
  const activity = await models.Activity.findOne({
    where: { id },
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    }
  })

  if (!activity) { throwError('activity01') }

  return activity
}

async function getActivities () {
  return models.Activity.findAll({
    include: {
      model: models.ServiceDetail,
      where: { status: 'active' },
      required: false
    },
    order: [['status', 'ASC']]
  })
}

module.exports = {
  createActivity,
  updateActivity,
  deleteActivity,
  getActivityById,
  getActivities
}
