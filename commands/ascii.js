const Discord = require('discord.js')
const figlet = require('figlet')

module.exports.run = async (client, message, args) => {
    if (!args.join(' ')) {
        return message.reply("if you wanna make something into ASCII you need to include what you want, ex. '$ascii Ban Jaco'")
      }
      figlet(args.join(' '), (err, data) => {
        message.channel.send(data, {
          code: 'ascii'
        });
      });
}

module.exports.help = {
    name: 'ascii'
}