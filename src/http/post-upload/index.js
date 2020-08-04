let arc = require('@architect/functions')
const { execSync } = require("child_process");

exports.handler = async function(event, context) {
  execSync('gm version', { encoding: 'utf8', stdio: 'inherit' })

  return {
    body: 'praisecage'
  }
}
