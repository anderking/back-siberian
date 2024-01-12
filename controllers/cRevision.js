'use strict'

const sRevision = require('../services/sRevision')
const { makeResponseOk, makeResponseException, makeResponseOkMessage } = require('../global/responses')
const { createNotification } = require('../services/sNotification')

async function createRevision (req, res) {
  try {
    const revision = await sRevision.createRevision(req.body, req.file)

    await createNotification(revision, 'Solicitud creada')
    await createNotification({
      UserId: revision.Calendars[0].LenderCalendars[0].UserId,
      BitacoraId: revision.Bitacoras[1].id
    }, 'Revisión asignada')

    makeResponseOk(res, { revision }, 'revision/single', 'createdF', 'Solicitud')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function createWarrantyRevision (req, res) {
  try {
    const revision = await sRevision.createWarrantyRevision(req.params.serviceOrderId, req.body, req.file)

    makeResponseOk(res, { revision }, 'revision/single', 'createdF', 'Solicitud por Garantía')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function updateRevision (req, res) {
  try {
    const revision = await sRevision.updateRevision(req.params.id, req.body, req.files)

    makeResponseOk(res, { revision }, 'revision/single', 'updatedF', 'Revisión')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getRevision (req, res) {
  try {
    const revision = await sRevision.getRevisionById(req.params.id)
    makeResponseOk(res, { revision }, 'revision/single')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getRevisions (req, res) {
  try {
    const revisions = await sRevision.getRevisions()
    makeResponseOk(res, { revisions }, 'revision/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getAllWarrantyRevision (req, res) {
  try {
    const revisions = await sRevision.getAllWarrantyRevision()
    makeResponseOk(res, { revisions }, 'revision/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getRevisionsByUser (req, res) {
  try {
    const revisions = await sRevision.getRevisionsByUser(req.params.userId)
    makeResponseOk(res, { revisions }, 'revision/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getRevisionsByLender (req, res) {
  try {
    const revisions = await sRevision.getRevisionsByLender2(req.params.lenderId)
    makeResponseOk(res, { revisions }, 'revision/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getAllWarrantyRevisionsByLender (req, res) {
  try {
    const revisions = await sRevision.getAllWarrantyRevisionsByLender(req.params.lenderId)

    makeResponseOk(res, { revisions }, 'revision/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function getAllWarrantyRevisionsByUser (req, res) {
  try {
    const revisions = await sRevision.getAllWarrantyRevisionsByUser(req.params.userId)

    makeResponseOk(res, { revisions }, 'revision/many')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function approveRevision (req, res) {
  try {
    const revision = await sRevision.approveRevision(req.params.id)

    await createNotification(revision, 'Solicitud aceptada')

    makeResponseOk(res, { revision }, 'revision/single', 'revisionApproved', 'Revisión')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function rejectRevision (req, res) {
  try {
    const revision = await sRevision.rejectRevision(req.params.id, req.params.motiveId, req.body)

    await createNotification(revision, 'Solicitud rechazada')

    makeResponseOk(res, { revision }, 'revision/single', 'revisionRejected', 'Revisión')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function irreparableRevision (req, res) {
  try {
    const revision = await sRevision.irreparableRevision(req.params.id, req.params.motiveId, req.body)

    await createNotification(revision, 'Servicio irreparable')

    makeResponseOk(res, { revision }, 'revision/single', 'revisionIrreparable', 'Revisión')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function diagnoseRevision (req, res) {
  try {
    const revision = await sRevision.diagnoseRevision(req.params.id, req.body, req.file)

    await createNotification(revision, 'Revisión realizada')

    makeResponseOk(res, { revision }, 'revision/single', 'revisionDiagnosticated', 'Revisión')
  } catch (err) {
    makeResponseException(res, err)
  }
}

async function cancelRevision (req, res) {
  try {
    const revision = await sRevision.cancelRevision(req.params.id)

    await createNotification(revision, 'Revisión cancelada')

    makeResponseOkMessage(res, 'revisionCancelled', 'Revisión')
  } catch (err) {
    makeResponseException(res, err)
  }
}

module.exports = {
  createRevision,
  updateRevision,
  cancelRevision,
  getRevision,
  getRevisions,
  approveRevision,
  rejectRevision,
  diagnoseRevision,
  getRevisionsByUser,
  getRevisionsByLender,
  irreparableRevision,
  createWarrantyRevision,
  getAllWarrantyRevision,
  getAllWarrantyRevisionsByUser,
  getAllWarrantyRevisionsByLender
}
