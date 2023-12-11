const standardConfig = require('prettier-config-standard')

module.exports = {
  ...standardConfig,
  htmlWhitespaceSensitivity: 'ignore',
  singleAttributePerLine: true
}
