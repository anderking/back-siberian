'use strict'

const models = require('../models')
const { throwError } = require('../global/helpers')

async function getCompany () {
  const company = await models.Company.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']]
  })

  if (!company[0]) { throwError('company02') }

  return company[0]
}

async function updateCompany (updatedCompany, fileImage) {
  const company = await getCompany()

  if (fileImage) { updatedCompany.imageUrl = fileImage }

  return company.update(updatedCompany)
}

async function createCompany (company, fileImage) {
  if (fileImage) { company.imageUrl = fileImage }

  await models.Company.create(company)

  return getCompany()
}

module.exports = {
  createCompany,
  getCompany,
  updateCompany
}
