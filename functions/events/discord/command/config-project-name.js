console.log('################################################################################')
console.log('        command/config-project-name.js STARTING...')
console.log('################################################################################')

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const config    = require('../../../../helpers/config.js');
const functions = require('../../../../helpers/functions.js');

let projectName = context.params.event.data.options[0].value;

//Need a function to determine admin status of member
// functions.isAdmin()
let guild_id   = context.params.event.guild_id;
let user_roles = context.params.event.member.roles;

//get list of server roles
let roles = await lib.discord.guilds['@0.2.4'].roles.list({
  guild_id: guild_id,
});

//get the ID of the adminRoleName
for (let i = 0; i < roles.length; i++){
  if (roles[i].name == config.adminRoleName()){
    let adminID = roles[i].id;
  }
}

//add the project_name if member has admin role
if (user_roles.includes(adminID)) {
  await lib.utils.kv['@0.1.16'].set({
    key: "ProjectName-" + guild_id,
    value: projectName
  });

  //let the member know it happened
  let followUp = await lib.discord.interactions['@1.0.1'].responses.ephemeral.create({
    token: `${context.params.event.token}`,
    content: 'The project name was set to **' + projectName + '**. Run the command again to change it. :-)'
  })
} else {
  let followUp = await lib.discord.interactions['@1.0.1'].responses.ephemeral.create({
    token: `${context.params.event.token}`,
    content: 'You do not have permission to set the project name to **' + projectName + '**. Run the command again after being given the correct role to set it. :-)'
  })
}