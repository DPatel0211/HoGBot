const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.some(r => ["Server Team", "Server Assistance", "Owners", "Trusted", "test"].includes(r.name))) {
        return message.reply("you don't have the perms to kick a user from a voice channel!");
      }
        const person = message.mentions.members.first();
        if (!person) {
            return message.reply("you must specify the member you want to kick from a voice channel! (ie. $vckick `@user`)!");
          }
        if (person.roles.some(r => ["Server Team", "Server Assistance", "Owners", "test"].includes(r.name))) {
          return message.reply("you cannot kick a Server Team member from a voice channel!");
        }
        if (!person.voiceChannel) {
          return message.reply("The following user/bot is not in a voice channel! Please try tagging someone else that's in a voice channel!");
        }
        const temp_channel = await message.guild.createChannel(message.author.id, 'voice', [
          { id: message.guild.id,
            deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'], },
          { id: person.id,
            deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'] }
        ]);
        await person.setVoiceChannel(temp_channel);

        await temp_channel.delete();
        return message.reply(`alrighty, ${person.user} has been kicked from the voice channel!`);
}

module.exports.help = {
    name: "vckick"
}