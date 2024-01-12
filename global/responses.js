const makeTemplate = require('../templates')
const messages = require('../static/messages')

function makeResponseOk (res, data, pathTemplate, code, model) {
  let message
  if (model === undefined) {
    message = { code: 200, text: messages[[code]] }
  } else {
    message = { code: 200, text: model + messages[[code]] }
  }
  data['message'] = message
  const json = makeTemplate(data, pathTemplate)
  res.status(200).json(json)
}

function makeResponseOkMessage (res, code, model) {
  let message
  if (model === undefined) {
    message = { code: 200, text: messages[[code]] }
  } else {
    message = { code: 200, text: model + messages[[code]] }
  }
  const json = makeTemplate({ message }, 'responses/okMessage')
  res.status(200).json(json)
}

function makeResponseException (res, error) {
  if (!Object.prototype.hasOwnProperty.call(error, 'code')) { // If error has no code, i.e. it's a generic exception
    error.code = '401'
  }
  const json = makeTemplate({ error }, 'responses/exception')
  res.status(200).json(json)
}

module.exports = {
  makeResponseException,
  makeResponseOkMessage,
  makeResponseOk
}
