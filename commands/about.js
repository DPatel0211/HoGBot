const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor(0xC8A2C8)
    .setThumbnail('https://i.ibb.co/hVhrg8r/Ho-GBot-about.png')
    .setTitle('Bot/Server Info Commands Help')
    .addField('$botinfo','shows a basic bio about the bot')
    .addField('$invite', "gives you an invite link to let HoGBot join your server!\n**WARNING:** this bot is specifically for HoG, so don't be surprised of it's performance in your server...")
    .addField('$serverinfo', 'shows a basic bio about the server the bot is currently in')
    .setFooter("HoGBot user command")
    .setTimestamp();
  message.channel.send({ embed });
}

module.exports.help = {
    name: "about"
}