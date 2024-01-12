'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config/setup')
const { throwError } = require('../global/helpers')
const { makeResponseException } = require('../global/responses')

function verifyToken (req, res, next) {
  try {
    const token = req.headers['x-access-token']
    if (!token) {
      throwError('token0')
    }
    jwt.verify(token, config.secret_key, function (err, decoded) {
      if (err) {
        throwError('token1')
      }
      req.userId = decoded.id
      next()
    })
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = verifyToken
