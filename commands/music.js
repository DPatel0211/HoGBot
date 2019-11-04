const Discord = require('discord.js') 

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor(0xC8A2C8)
        .setThumbnail('https://i.ibb.co/VqjZKbx/Ho-GBot-music.png')
        .setTitle('Music Commands Help')
        .addField('$spotify `@user`', 'retrieves the song that a user is playing on Spotify based on their Discord presence (`@user` is optional)')
        .addField('$fmset `your_last_fm_username`', 'lets a user set their Last.fm username to reference to for Last.fm-related commands')
        .addField('$fm', 'displays the last played track according to your Last.fm account')
        .addField('$fmweekly-albums', 'shows the top 9 most played albums of the user according to their Last.fm account')
        .addField('$fmweekly-tracks', `shows the top 9 most played tracks of the user according to their Last.fm account`)
        .addField(`$fmweekly-artists`, `shows the top 9 most played artists of the user according to their Last.fm account`)
        .setFooter('HoGBot user command')
        .setTimestamp();
        message.channel.send({embed});
}

module.exports.help = {
    name: "music"
}