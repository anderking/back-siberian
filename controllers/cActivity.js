'use strict'

const sActivity = require('../services/sActivity')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')

async function createActivity (req, res) {
  try {
    const activity = await sActivity.createActivity(req.body)

    makeResponseOk(res, { activity }, 'activity/single', 'createdF', 'Actividad')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateActivity (req, res) {
  try {
    const activity = await sActivity.updateActivity(req.params.id, req.body)

    makeResponseOk(res, { activity }, 'activity/single', 'updatedF', 'Actividad')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteActivity (req, res) {
  try {
    await sActivity.deleteActivity(req.params.id)

    makeResponseOkMessage(res, 'deletedF', 'Actividad')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getActivity (req, res) {
  try {
    const activity = await sActivity.getActivityById(req.params.id)

    makeResponseOk(res, { activity }, 'activity/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getActivities (req, res) {
  try {
    const activities = await sActivity.getActivities()

    makeResponseOk(res, { activities }, 'activity/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createActivity,
  updateActivity,
  deleteActivity,
  getActivity,
  getActivities
}
