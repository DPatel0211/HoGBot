const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    return message.reply("Here's the invitation link for HoGBot: https://discordapp.com/api/oauth2/authorize?client_id=503334470062178304&permissions=8&scope=bot\n \n**If you have any questions about commands, runtimes/downtimes and other stuff, DM @Dev#1426.**");
}

module.exports.help = {
    name: "invite"
}