'use strict'

module.exports = {
  getBitacoras,
  getBitacorasByType,
  addBitacora,
  cancelBitacora
}

require('date-utils')
const models = require('../models')
const sRevision = require('../services/sRevision')
const sServiceOrder = require('../services/sServiceOrder')

const { throwError } = require('../global/helpers')
var eventRevisionArray = ['request', 'requestEvaluation', 'execution', 'closure']
var eventServiceOrderArray = ['budget', 'budgetEvaluation', 'schedule', 'execution', 'warranty', 'closure']
var eventStatus = ['pending', 'ready', 'cancel']
var bitacoraTypeArray = ['revision', 'serviceOrder', 'revisionWaranty', 'serviceOrderWarranty']
var bitacora = []
var dataArray = []
var bitacoraNextState = []

async function getBitacoras () {
  const Bitacoras = await models.Bitacora.findAll({
    where: { status: { [models.Sequelize.Op.ne]: 'cancel' } },
    include: [
      {
        model: models.Motive,
        required: true
      },
      {
        model: models.Revision,
        required: false
      },
      {
        model: models.ServiceOrder,
        required: false
      }],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Bitacoras || !Bitacoras.length) { throwError('Bitacora01') }
  return Bitacoras
}

async function getBitacorasByType (type) {
  const Bitacoras = await models.Bitacora.findAll({
    where: {
      status: { [models.Sequelize.Op.ne]: 'cancel' },
      type: type
    },
    include: [
      {
        model: models.Motive,
        required: true
      },
      {
        model: models.Revision,
        required: false
      },
      {
        model: models.ServiceOrder,
        required: false
      }
    ],
    order: [
      ['id', 'asc']
    ]
  })
  if (!Bitacoras || !Bitacoras.length) { throwError('Bitacora01') }
  return Bitacoras
}

async function addBitacora (data) {
  dataArray = JSON.stringify(data)

  if (data.type === 'revision') bitacora = await getBitacoraRevision(data)
  else if (data.type === 'serviceOrder') bitacora = await getBitacoraServiceOrder(data)

  const operation = await evaluateBitacoraActualState()

  if (operation === 'save') bitacora = await saveBitacora(bitacora)
  else if (operation === 'update') bitacora = await updateBitacora(bitacora.id, bitacora)

  if (operation !== 'false') {
    dataArray = JSON.stringify(bitacora)
    bitacoraNextState = await generateBitacoraNextState(bitacora.type)
    if (await validateSaveBitacoraNextState(bitacoraNextState)) {
      bitacoraNextState = await saveBitacora(bitacoraNextState)
    }
  }
  return bitacora
}

function getBitacoraRevision (data) {
  const Bitacoras = models.Bitacora.findOne({
    where: {
      type: data.type,
      eventType: data.eventType,
      RevisionId: data.RevisionId
    }
  })
  if (!Bitacoras) throwError('Calendar01')
  return Bitacoras
}

function getBitacoraServiceOrder (data) {
  const Bitacoras = models.Bitacora.findOne({
    where: {
      type: data.type,
      eventType: data.eventType,
      ServiceOrderId: data.ServiceOrderId
    }
  })
  if (!Bitacoras) throwError('Calendar01')
  return Bitacoras
}

function evaluateBitacoraActualState () {
  if (!bitacora) {
    bitacora = JSON.parse(dataArray)
    if (bitacora.eventType === eventRevisionArray[0] || bitacora.eventType === eventServiceOrderArray[0]) {
      bitacora.status = eventStatus[1]
      bitacora.date = Date.today().toFormat('YYYYMMDD')
      return 'save'
    } else {
      bitacora.status = eventStatus[0]
      return 'save'
    }
  } else {
    if (bitacora.status === eventStatus[0] && JSON.parse(dataArray).status === 'cancel') {
      bitacora.status = eventStatus[2]
      bitacora.MotiveId = JSON.parse(dataArray).MotiveId
      bitacora.description = JSON.parse(dataArray).description
      return 'update'
    } else if (bitacora.status === eventStatus[0] && (JSON.parse(dataArray).eventType === 'execution')) {
      bitacora.status = eventStatus[1]
      bitacora.MotiveId = JSON.parse(dataArray).MotiveId
      bitacora.description = JSON.parse(dataArray).description
      return 'update'
    } else if (bitacora.status === eventStatus[0]) {
      bitacora.status = eventStatus[1]
      return 'update'
    } else return 'false'
  }
}

function generateBitacoraNextState (bitacoraType) {
  bitacoraNextState = JSON.parse(dataArray)
  switch (bitacoraType) {
    case bitacoraTypeArray[0]:
      if (bitacora.status === eventStatus[0]) {
        bitacoraNextState.status = eventStatus[1]
      } else if (bitacora.status === eventStatus[1]) {
        for (let index = 0; index < eventRevisionArray.length; index++) {
          if (eventRevisionArray[index] === bitacora.eventType && index + 1 < eventRevisionArray.length) {
            bitacoraNextState.eventType = eventRevisionArray[index + 1]
            bitacoraNextState.status = eventStatus[0]
          }
        }
      } else if (bitacora.status === eventStatus[2] && bitacora.eventType !== eventRevisionArray[3]) {
        bitacoraNextState.eventType = eventRevisionArray[3]
        bitacoraNextState.status = eventStatus[2]
      }
      break

    case bitacoraTypeArray[1]:
      if (bitacora.status === eventStatus[0]) {
        bitacoraNextState.status = eventStatus[1]
      } else if (bitacora.status === eventStatus[1]) {
        for (let index = 0; index < eventServiceOrderArray.length; index++) {
          if (eventServiceOrderArray[index] === bitacora.eventType && index < eventServiceOrderArray.length) {
            bitacoraNextState.eventType = eventServiceOrderArray[index + 1]
            bitacoraNextState.status = eventStatus[0]
          }
        }
      } else if (bitacora.status === eventStatus[2] && bitacora.eventType !== eventServiceOrderArray[5]) {
        bitacoraNextState.eventType = eventServiceOrderArray[5]
        bitacoraNextState.status = eventStatus[2]
      }
      break

    case bitacoraTypeArray[2]:
      console.log('   case bitacoraTypeArray[2]:' + bitacoraTypeArray[2])
      break

    case bitacoraTypeArray[3]:
      console.log('   case bitacoraTypeArray[3]:' + bitacoraTypeArray[3])
      break
  }

  bitacoraNextState.date = Date.today().toFormat('YYYYMMDD')
  // bitacoraNextState.MotiveId = 1
  return bitacoraNextState
}

async function updateBitacora (id, data) {
  const BitacoraOld = await getOneBitacora(id)
  BitacoraOld.MotiveId = data.MotiveId
  BitacoraOld.eventType = data.eventType
  BitacoraOld.date = data.date
  BitacoraOld.description = data.description
  BitacoraOld.status = data.status
  return BitacoraOld.save()
}

async function getOneBitacora (id) {
  const Bitacora = await models.Bitacora.findOne({ where: id })
  if (!Bitacora) throwError('category01')
  return Bitacora
}

async function saveBitacora (data) {
  const newBitacora = await models.sequelize.transaction(async transaction => {
    return models.Bitacora.build({
      type: data.type,
      MotiveId: data.MotiveId,
      eventType: data.eventType,
      RevisionId: data.RevisionId,
      ServiceOrderId: data.ServiceOrderId,
      date: data.date,
      description: data.description,
      status: data.status
    }).save()
  })

  // const newBitacora = await models.Bitacora.create(data)
  return getOneBitacora(newBitacora.id)
}

async function validateSaveBitacoraNextState (data) {
  var bitacoraSearch = []
  if (data.type === 'revision') bitacoraSearch = await getBitacoraRevision(data)
  else if (data.type === 'serviceOrder') bitacoraSearch = await getBitacoraServiceOrder(data)
  if (!bitacoraSearch || bitacoraSearch.length === 0) return true
  else return false
}

async function cancelBitacora (id, data) {
  const BitacoraOld = await getOneBitacora(id)
  await BitacoraOld.update({ status: 'cancel' })

  dataArray = JSON.stringify(BitacoraOld)
  bitacoraNextState = await generateBitacoraNextState(BitacoraOld.type)

  if (await validateSaveBitacoraNextState(bitacoraNextState)) {
    bitacoraNextState.MotiveId = data.MotiveId
    bitacoraNextState.description = data.description
    bitacoraNextState = await saveBitacora(bitacoraNextState)
  }
  if (BitacoraOld.type === 'revision') {
    await sRevision.cancelRevision(BitacoraOld.RevisionId)
    // makeResponseOkMessage(res, 'revisionCancelled', 'Revisión')
  } else if (BitacoraOld.type === 'serviceOrder') {
    await sServiceOrder.cancelServiceOrder(BitacoraOld.ServiceOrderId)
    // makeResponseOkMessage(res, 'serviceOrderCancelled', 'Orden de Servicio')
  }
  return BitacoraOld
}

module.exports = {
  getBitacoras,
  getBitacorasByType,
  addBitacora,
  cancelBitacora
}
