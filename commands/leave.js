const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.voiceChannel) {
        return message.reply('please connect to a voice channel!');
      }
      if (!message.guild.me.voiceChannel) {
        return message.reply("sorry, this bot isn't connected to a voice channel!");
      }
      if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) {
        return message.reply("sorry, you aren't connected to the same voice channel as the bot!");
      }
      message.guild.me.voiceChannel.leave();
      message.channel.send("Leaving voice channel...");
}

module.exports.help = {
    name: "leave"
}