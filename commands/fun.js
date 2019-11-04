const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor(0xC8A2C8)
        .setThumbnail('https://i.ibb.co/zRH0NTg/Ho-GBot-fun.png')
        .setTitle('Fun Commands Help')
        .addField('$ping', 'replies with "Pong" and the response time of HoGBot')
        .addField('$ascii `text`', 'converts `text` into wonderful ASCII word art')   
        .addField('$roast `@user`', 'roasts tf out of the `@user` you tag')
        .addField('$8ball `question`', 'responds to your `question` with a Yes/No response')
        .addField('$avatar `@user`', 'retrieves the avatar of either `@user` or yourself (`@user` is optional)')
        .addField("$fusion `@user_or_bot`", "fuses your profile picture and another user's/bot's profile picture into one")
        .setFooter("HoGBot user command")
        .setTimestamp();
      message.channel.send({ embed });
}

module.exports.help = {
    name: "fun"
}