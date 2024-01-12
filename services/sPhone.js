'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function createPhone (id, data) {
  const newPhone = await models.sequelize.transaction(async transaction => {
    const phone = await models.Phone.create(data)

    await phone.setUser(id)

    return phone
  })
  return getPhoneByID(newPhone.id)
}

async function updatePhone (id, data) {
  const phone = await getPhoneByID(id)

  return phone.update(data)
}

async function deletePhone (id) {
  await getPhoneByID(id)

  await models.Phone.destroy({
    where: {
      id: id
    }
  })
}

async function getPhoneByID (id) {
  const phone = await models.Phone.findByPk(id)

  if (!phone) {
    throwError('phone01')
  }

  return phone
}

async function getUserPhones (id) {
  return models.Phone.findAll({
    where: {
      UserId: id
    }
  })
}

async function savePhones (id, data) {
  await models.sequelize.transaction(async transaction => {
    if (data.toDelete) {
      await models.Phone.destroy({
        where: {
          id: data.toDelete
        }
      })
    }

    await models.Phone.bulkCreate(data.phones, {
      updateOnDuplicate: ['number', 'phoneType']
    })
  })
  return getUserPhones(id)
}

module.exports = {
  createPhone,
  updatePhone,
  deletePhone,
  getUserPhones,
  savePhones
}
