'use strict'

const sCompany = require('../services/sCompany')
const { makeResponseOk, makeResponseException } = require('../global/responses')

async function getCompany (req, res) {
  try {
    const company = await sCompany.getCompany()

    makeResponseOk(res, { company }, 'company/single')
  } catch (e) {
    makeResponseException(res, e)
  }
}
async function createCompany (req, res) {
  try {
    const company = await sCompany.createCompany(req.body, res.locals.imageUrl)

    makeResponseOk(res, { company }, 'company/single', 'createdF', 'Empresa')
  } catch (e) {
    makeResponseException(res, e)
  }
}

async function updateCompany (req, res) {
  try {
    const company = await sCompany.updateCompany(req.body, res.locals.imageUrl)

    makeResponseOk(res, { company }, 'company/single', 'updatedF', 'Empresa')
  } catch (e) {
    makeResponseException(res, e)
  }
}

module.exports = {
  getCompany,
  createCompany,
  updateCompany
}
