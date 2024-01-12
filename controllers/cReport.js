'use strict'

const sReport = require('../services/sReport')
const { makeResponseOk, makeResponseException } = require('../global/responses')

async function getServiceDetails (req, res) {
  try {
    const serviceDetails = await sReport.getServiceDetails(req.query)

    makeResponseOk(res, { serviceDetails }, 'report/serviceDetails')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  getServiceDetails
}
