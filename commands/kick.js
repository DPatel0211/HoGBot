const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.some(r => ["Server Team", "Trusted", "Owners", "Server Assistance", "test"].includes(r.name))) {
        return message.reply("you don't have the permissions to kick users!");
      }

      // Let's first check if we have a member and if we can kick them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      let member = message.mentions.members.first();
      if (!member) {
        return message.reply("Please mention a valid member of this server!");
      }
      if (member.roles.some(r => ["Server Team", "Developers", "Owners"].includes(r.name))) {
        return message.reply("you cannot kick a Staff Member!");
      }
      // slice(1) removes the first part, which here should be the user mention!
      let reason = args.slice(1).join(' ');
      if (!reason) {
        return message.reply("please indicate a reason for the kick!");
      }
      // Now, time for a swift kick in the nuts!   
      member.kick();
      message.reply(`alrighty then, ${member.user.tag} has been kicked for: ***${reason}***`);
}

module.exports.help = {
    name: "kick"
}