'use strict'

const sBitacora = require('../services/sBitacora')
const response = require('../global/responses')

async function getBitacoras (req, res) {
  try {
    const bitacoras = await sBitacora.getBitacoras()
    // response.makeResponseOk(res, { bitacoras }, 'bitacora/listbitacoras')
    res.status(200).send({ bitacoras })
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function getBitacorasByType (req, res) {
  try {
    const type = req.params.sDate
    const bitacoras = await sBitacora.getBitacorasByType(type)
    // response.makeResponseOk(res, { bitacoraies }, 'bitacora/listBitacoras')
    res.status(200).send({ bitacoras })
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function addBitacora (req, res) {
  try {
    const body = req.body
    const bitacora = await sBitacora.addBitacora(body)
    res.status(200).send({ bitacora })
    //  response.makeResponseOk(res, { bitacora }, 'bitacora/getBitacora', 'createdM', 'Bitacora')
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

async function cancelBitacora (req, res) {
  try {
    const id = req.params.id
    const data = req.body
    const Bitacora = await sBitacora.cancelBitacora(id, data)
    // response.makeResponseOk(res, { Bitacora }, 'bitacora/cancelBitacora', 'updateF', 'Bitacora')
    res.status(200).send({ Bitacora })
  } catch (err) {
    response.makeResponseException(res, err)
  }
}

module.exports = {
  getBitacoras,
  getBitacorasByType,
  addBitacora,
  cancelBitacora
}
