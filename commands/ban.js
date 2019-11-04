const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.some(r => ["Server Team", "Trusted", "Owners", "Server Assistance", 'test'].includes(r.name))) {
        return message.reply("you don't have the permissions to ban users!");
      }

      // Let's first check if we have a member and if we can ban them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      let member = message.mentions.members.first();
      if (!member) {
        return message.reply("please mention a valid member of this server!");
      }

      if (member.roles.some(r => ["Server Team", "Trusted", "Owners", "Server Assistance", "test"].includes(r.name))) {
        return message.reply("you cannot ban a Staff Member!");
      }
      // slice(1) removes the first part, which here should be the user mention!
      let reason = args.slice(1).join(' ');
      if (!reason) {
        return message.reply("please indicate a reason for the ban!");
      }

      // Now, time for a swift ban in the nuts!   
      message.guild.ban(member, 2);
      message.reply(`alrighty then, ${member.user.tag} has been banned for: ***${reason}***`);
}

module.exports.help = {
    name: 'ban'
}