'use strict'

const sLocation = require('../services/sLocation')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')
const { throwError } = require('../global/helpers')

async function addLocation (req, res) {
  try {
    const location = await sLocation.createLocation(req.body)

    makeResponseOk(res, { location }, 'location/single', 'createdF', 'Dirección')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deleteLocation (req, res) {
  try {
    await sLocation.deleteLocation(req.params.id)

    makeResponseOkMessage(res, 'deletedF', 'Dirección')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getLocations (req, res) {
  try {
    const locations = await sLocation.getUserLocations(req.params.userId)

    if (!locations.length) {
      throwError('location02')
    }

    makeResponseOk(res, { locations }, 'location/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getLocation (req, res) {
  try {
    const location = await sLocation.getLocationByID(req.params.id)

    makeResponseOk(res, { location }, 'location/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateLocation (req, res) {
  try {
    const location = await sLocation.updateLocation(req.params.id, req.body)

    makeResponseOk(res, { location }, 'location/single', 'updatedF', 'Dirección')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  addLocation,
  deleteLocation,
  getLocations,
  updateLocation,
  getLocation
}
