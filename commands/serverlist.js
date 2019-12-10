const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
}

module.exports.help = {
    name: "serverlist"
}
