const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.channel.send(`Pong! (took: ${message.createdTimestamp - message.createdTimestamp}ms)`);  
}

module.exports.help = {
    name: 'ping'
}