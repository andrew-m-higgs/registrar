console.log('################################################################################')
console.log('        command/config-creator-wallets.js STARTING...')
console.log('################################################################################')

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const config    = require('../../../../helpers/config.js');
const functions = require('../../../../helpers/functions.js');
