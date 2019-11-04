const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.some(r => ["Server Team", "Server Assistance", "Owners", "Trusted", "test"].includes(r.name))) {
        return message.reply("you don't have the permissions to warn users!");
      }

      // Let's first check if we have a member and if we can warn them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      let member = message.mentions.members.first();
      if (!member) {
        return message.reply("please mention a valid member of this server!");
      }
      if (member.roles.some(r => ["Server Team", "Server Assistance", "Owners", "Trusted"].includes(r.name))) {
        return message.reply("you cannot warn a Staff Member!");
      }
      // slice(1) removes the first part, which here should be the user mention!
      let reason = args.slice(1).join(' ');
      if (!reason) {
        return message.reply("please indicate a reason for the warn!");
      }
      // Now, time for a swift warn in the nuts!   
      message.reply(`alrighty then, ${member.user.tag} has been warned for: ***${reason}***`);
}

module.exports.help = {
    name: "warn"
}