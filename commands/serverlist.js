const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    client.guilds.forEach((guild) => {
        return message.channel.send(" - " + guild.name);
    })
}

module.exports.help = {
    name: "serverlist"
}
