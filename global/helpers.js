'use strict'

const moment = require('moment')
moment.locale('es')
const admin = require('firebase-admin')
const serviceAccount = require('../siberian-255003-firebase-adminsdk-7ygsc-d13ee3074f.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://siberian-255003.firebaseio.com'
})

function throwError (codeMessage) {
  const messages = require('../static/messages')
  throw Object.assign(
    new Error(messages[codeMessage]),
    { code: 401 }
  )
}

async function sendNotification (registrationToken, data) {
  var payload = {
    notification: {
      title: data.name,
      body: data.message
    },
    data: {
      PromotionId: data.PromotionId,
      BitacoraId: data.BitacoraId
    }
  }

  return admin.messaging().sendToDevice(registrationToken, payload)
}

module.exports = {
  throwError,
  sendNotification
}
