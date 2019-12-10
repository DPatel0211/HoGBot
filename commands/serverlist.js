const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    return message.channel.send("Servers:")
    client.guilds.forEach((guild) => {
        return message.channel.send(" - " + guild.name)
    })
}

module.exports.help = {
    name: "serverlist"
}
