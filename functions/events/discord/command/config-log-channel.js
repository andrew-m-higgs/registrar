console.log('################################################################################')
console.log('        command/config-log-channel.js STARTING...')
console.log('################################################################################')

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const config    = require('../../../../helpers/config.js');
const functions = require('../../../../helpers/functions.js');

let logChannel      = context.params.event.data.options[0].value;
let guild_id        = context.params.event.guild_id;
let isAdmin         = functions.isAdmin(context);
let message_content = "";

if (isAdmin) {
  // IS AN ADMIN
  await lib.utils.kv['@0.1.16'].set({
    key: "LogChannel-" + guild_id,
    value: logChannel
  }).catch(console.error(e));

  message_content = "The log channel was set to **" + logChannel + "**. Re-run the command to change it."
} else {
  // NOT AN ADMIN
  message_content = "You do not have permission to run this command. Run the command again after being given the correct role. :-)"
}

let message = await lib.discord.interactions['@1.0.1'].responses.ephemeral.create({
    token: context.params.event.token,
    content: message_content
})
