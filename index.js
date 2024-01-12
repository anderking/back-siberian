'use strict'

const app = require('./app')
const models = require('./models')

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    // models.sequelize.sync().then(function () {
    //   console.log('Models has been synchronized')
    app.listen(process.env.PORT || 12225, () => {
      console.log(`API listening on ${'localhost'}:${process.env.PORT || 12225}`)
    })
    // })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
