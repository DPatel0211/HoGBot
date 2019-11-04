const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor(0xC8A2C8)
        .setThumbnail("https://i.ibb.co/NLyk5GS/Ho-GBot-help.png")
        .setTitle("HoGBot Commands Help")
        .addField('$about', 'displays all commands related to the bot and server')
        .addField("$fun", 'displays all the cool commands that HoGBot has to offer!')
        .addField("$music", 'displays all the music-related commands for Spotify and Last.fm')
        .addField('$search', 'displays all the commands where you can search on Youtube, GIPHY, and more!')
        .addField('$roles', 'displays all the commands involved with role-adding/removal (ex. $removeNProle)')
        .addField('$mod', 'HoGBot Server Staff and Owner commands for server moderation')
        .setFooter("HoGBot user command")
        .setTimestamp();
      message.channel.send({ embed });
}

module.exports.help = {
    name: "help"
}