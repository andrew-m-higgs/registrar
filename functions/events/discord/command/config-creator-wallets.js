console.log('################################################################################')
console.log('        command/config-creator-wallets.js STARTING...')
console.log('################################################################################')

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const config    = require('../../../../helpers/config.js');
const functions = require('../../../../helpers/functions.js');

let walletStrings = context.params.event.data.options;
let isAdmin = functions.isAdmin(context.params.event.member.user.id);
let userRoles = context.params.event.member.roles;
console.log("config: " + userRoles);
