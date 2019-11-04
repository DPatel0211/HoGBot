const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor(0xC8A2C8)
        .setThumbnail("https://i.ibb.co/0c1XhNc/Ho-GBot-pfp.png")
        .setTitle("HoGBot Server Utility Bot")
        .addField("Created by:", "DPatel#1426")
        .addField("Run by:", "Node.js [JS]")
        .addField("Uptime:", client.uptime + "ms")
        .setFooter("HoGBot user command")
        .setTimestamp();
      message.channel.send({ embed });
}

module.exports.help = {
    name: "botinfo"
}