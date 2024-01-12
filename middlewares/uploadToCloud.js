'use strict'

const cloudinary = require('cloudinary').v2
const { throwError } = require('../global/helpers')
const { makeResponseException } = require('../global/responses')

cloudinary.config({
  cloud_name: 'teamwatson',
  api_key: '537882238422221',
  api_secret: '15AHW604Ghnol3cBGVEgnf15buo'
})

async function uploadToCloud (req, res, next) {
  var eager = {
    width: 200, height: 150, crop: 'scale', format: 'jpg'
  }

  try {
    if (req.file) {
      await cloudinary.uploader.upload(req.file.path, { eager: eager })
        .then(function (image) {
          res.locals.imageUrl = image.url
        })
        .catch(function (err) {
          if (err) {
            throwError('image')
          }
        })
    }
    next()
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = uploadToCloud
