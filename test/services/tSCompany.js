'use strict'

const test = require('ava')

const models = require('../../models')
const companyFixtures = require('../fixtures/fCompany')
const sCompany = require('../../services/sCompany')

let db = null

test.before(async () => {
  db = await models.sequelize.sync({ force: true })
  await db.models.Company.create(companyFixtures.single)
})

test('Company', t => {
  t.truthy(db.models.Company, 'Company service should exist')
})

test.serial('Company#getCompany', async t => {
  const company = await sCompany.getCompany()

  company.dataValues.createdAt = '2019-08-10 00:00:00'
  company.dataValues.updatedAt = '2019-08-10 00:00:00'

  t.deepEqual(companyFixtures.single, company.dataValues, 'company should be the same')
})

test.serial('Company#createCompany', async t => {
  await db.models.Company.destroy({ where: { id: 1 } })

  const company = await sCompany.createCompany(companyFixtures.single)

  company.dataValues.createdAt = '2019-08-10 00:00:00'
  company.dataValues.updatedAt = '2019-08-10 00:00:00'

  t.deepEqual(companyFixtures.single, company.dataValues, 'company should be the same')
})

test.serial('Company#updateCompany', async t => {
  companyFixtures.single.name = 'Hola Mundo'
  companyFixtures.single.imageUrl = 'public/images/avatar/avatardefault2.png'
  const fileImage = { path: 'public/images/avatar/avatardefault2.png' }

  const company = await sCompany.updateCompany(companyFixtures.single, fileImage)

  company.dataValues.createdAt = '2019-08-10 00:00:00'
  company.dataValues.updatedAt = '2019-08-10 00:00:00'

  t.deepEqual(companyFixtures.single, company.dataValues, 'company should be the same')
})

test.serial('Company#getCompany - fail', async t => {
  await db.models.Company.destroy({ where: { id: 1 } })

  const error = await t.throwsAsync(async () => {
    await sCompany.getCompany()
  }, Error)

  t.deepEqual(error.code, 'company02', 'should be exist any company to get method run')

  await db.models.Company.create(companyFixtures.single) // Leave everything back to the beginning
})

test.serial('Company#updateCompany - fail', async t => {
  await db.models.Company.destroy({ where: { id: 1 } })

  companyFixtures.single.name = 'Hola Mundo'

  const error = await t.throwsAsync(async () => {
    await sCompany.updateCompany(companyFixtures.single)
  }, Error)

  t.deepEqual(error.code, 'company02', 'should be exist any company to update method run')

  await db.models.Company.create(companyFixtures.single) // Leave everything back to the beginning
})

test.serial('Company#createCompany - fail', async t => {
  const error = await t.throwsAsync(async () => {
    await sCompany.createCompany(companyFixtures.unprocessableCompany)
  }, Error)

  t.deepEqual(error.code, 'company01', 'should be not exist companies in the system to create method work')
})
