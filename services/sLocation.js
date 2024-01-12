'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createLocation (data) {
  const newLocation = await models.sequelize.transaction(async transaction => {
    const location = await models.Location.create(data)

    await location.setUser(data.UserId, { transaction })

    return location
  })
  return getLocationByID(newLocation.id)
}

async function updateLocation (id, data) {
  const location = await getLocationByID(id)

  return location.update(data)
}

async function deleteLocation (id) {
  await getLocationByID(id)

  await models.Location.destroy({
    where: {
      id: id
    }
  })
}

async function getLocationByID (id) {
  const location = await models.Location.findByPk(id)

  if (!location) {
    throwError('location01')
  }

  return location
}

async function getUserLocations (id) {
  return models.Location.findAll({
    where: {
      UserId: id
    }
  })
}

module.exports = {
  createLocation,
  updateLocation,
  deleteLocation,
  getUserLocations,
  getLocationByID
}
