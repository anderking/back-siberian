'use strict'

const mailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

var auth = {
  type: 'oauth2',
  user: 'teamwatson20191@gmail.com',
  clientId: '354334948051-v8rfgsdlv400dlfkrsalkc7mbece8qdk.apps.googleusercontent.com',
  clientSecret: 'm59FXh2XVCcylJ8uupTBmRB5',
  refreshToken: '1/OtLDUoVofmavDDmBH_asQnBP0JDUbycSniB32263MSg'
}

const transporter = mailer.createTransport({
  service: 'gmail',
  port: 465,
  auth: auth
})

transporter.use('compile', hbs({
  viewEngine: {
    partialsDir: '../templates/mails',
    layoutsDir: '../templates/mails',
    defaultLayout: false
  },
  viewPath: './templates/mails'
}))

var options = {
  from: `SIBERIAN <${auth.user}>`
}

// function renderTemplate (template, data) {
//   return template.replace(/&(.*?)%/g, (match, key) => data[key] || match)
// }

function sendMail (data) {
  options.to = data.mail
  options.subject = data.subject
  options.template = data.template

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info.response)
    }
  })
}

module.exports = {
  sendMail
}
