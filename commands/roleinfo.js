const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let role = args.join(' ')
    if (!role) {
        return message.reply('please include the name of the role you would like to know information about!');
    }

    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) {
        return message.reply("we couldn't find the role you were looking for! Make sure you're searching for the role by name, not by tag!");
    }

    const embed = new Discord.RichEmbed()
    .setColor(gRole.hexColor)
    .setAuthor(`Role Info for ${gRole.name}`)
    .addField(`ID`, `${gRole.id}`, true)
    .addField(`Mention`, `@<&${gRole.id}>`, true)
    .addField(`Position`, `${gRole.calculatedPosition}`, false)
    .addField(`Permissions (Bitfield)`, `${gRole.permissions}`)
    .addField(`Color`, `${gRole.hexColor}`)
    .addField(`Is Mentionable`, `${gRole.mentionable}`, false)
    .setFooter('HoGBot user command')
    .setTimestamp();
    message.channel.send({embed});

}

module.exports.help = {
    name: 'roleinfo'
}