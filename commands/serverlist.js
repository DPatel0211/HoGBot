const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  return message.channel.send(client.guilds);
}

module.exports.help = {
    name: "serverlist"
}
