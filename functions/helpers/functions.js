const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

async function addRole(roleID, user_id, guild_id) {
  console.log('(functions.js) )Adding role (' + roleID + ')... ');
  await lib.discord.guilds['@0.2.4'].members.roles.update({
    role_id: roleID,
    user_id: user_id,
    guild_id: guild_id,
  }).catch(function () {
    console.log("Promise Rejected: while adding a role. (File: functions.js).");
  });
}

async function delRole(roleID, user_id, guild_id) {
  console.log('(functions.js) Removing role (' + roleID + ')...');
  await lib.discord.guilds['@0.2.4'].members.roles.destroy({
    role_id: roleID,
    user_id: user_id,
    guild_id: guild_id,
  }).catch(function () {
    console.log("Promise Rejected: while deleting a role. (File: functions.js).");
  });
}
  

module.exports = {
  // PROCEDURES
  changeRoles: async (givenRole, removeRoles, user_id, guild_id) => {
    
    // Add new role
    //console.log("Adding role :", givenRole);
    addRole(givenRole, user_id, guild_id);

    //Remove others if there
    for (let i = 0; i < removeRoles.length; i++){
      //console.log("Removing role :", removeRoles[i]); 
      delRole(removeRoles[i], user_id, guild_id);
    }
  },
}

