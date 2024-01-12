const st = require('stjs')

module.exports = function makeTemplate (data, templatePath) {
  return st.select(require('./' + templatePath)).transform(data).root()
}
