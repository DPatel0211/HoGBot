const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor(0xC8A2C8)
        .setThumbnail("https://i.ibb.co/NLyk5GS/Ho-GBot-help.png")
        .setTitle("HoGBot Role Commands")
        .addField("$roleinfo `name_of_role`", "displays basic information about a role, no tag required")
        .addField("$removeNProle", `removes the "New People" role from the user who uses the command. For returning users who get the "New People" role when they join again`)
        .addField("$role `name_of_role`", "adds/removes the specified role to/from the user of the command, no tag required")
        .setFooter("HoGBot user command")
        .setTimestamp();
      message.channel.send({ embed });
}

module.exports.help = {
    name: 'roles'
}