const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.some(r => ["Server Team", "Trusted", "Owners", "Server Assistance", "test"].includes(r.name))) {
        return message.reply("you don't have the permissions to purge messages!");
    }

    if (!args[0]) {
        return message.reply("you need to include the number of messages you are purging!")
    }
      
      message.channel.bulkDelete(args[0]).then(() => {
        message.reply(`${args[0]} messages have been successfully purged!`).then(msg => msg.delete(3000))
      });
}

module.exports.help = {
    name: "purge"
}