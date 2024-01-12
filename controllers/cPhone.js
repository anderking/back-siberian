'use strict'

const sPhone = require('../services/sPhone')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')
const { throwError } = require('../global/helpers')

async function addPhone (req, res) {
  try {
    const phone = await sPhone.createPhone(req.params.userId, req.body)

    if (!phone) {
      throwError('phone02')
    }

    makeResponseOk(res, { phone }, 'phone/single', 'createdM', 'Teléfono')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function deletePhone (req, res) {
  try {
    await sPhone.deletePhone(req.params.id)

    makeResponseOkMessage(res, 'deletedM', 'Teléfono')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getPhones (req, res) {
  try {
    const phones = await sPhone.getUserPhones(req.params.userId)

    if (!phones.length) {
      throwError('phone02')
    }

    makeResponseOk(res, { phones }, 'phone/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function savePhones (req, res) {
  try {
    const phones = await sPhone.savePhones(req.params.userId, req.body)

    if (!phones.length) {
      throwError('phone02')
    }

    makeResponseOk(res, { phones }, 'phone/many', 'phone01')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updatePhone (req, res) {
  try {
    const phone = await sPhone.updatePhone(req.params.id, req.body)

    if (!phone) {
      throwError('phone02')
    }

    makeResponseOk(res, { phone }, 'phone/single', 'updatedM', 'Teléfono')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  addPhone,
  deletePhone,
  getPhones,
  updatePhone,
  savePhones
}
