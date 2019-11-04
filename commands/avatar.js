const Discord = require('discord.js') 

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first()
      if (!user) {
        let embed = new Discord.RichEmbed()
          .setTitle("here is your avatar!")
          .setImage(message.author.avatarURL)
          .setColor('#C8A2C8')
          .setFooter('HoGBot user command')
          .setTimestamp();
        message.channel.send({ embed });
        console.log('User avatar command executed.');
      }
      let embed = new Discord.RichEmbed()
        .setTitle(`here is ${user.username}'s avatar!`)
        .setImage(user.avatarURL)
        .setColor('#C8A2C8')
        .setFooter('HoGBot user command')
        .setTimestamp();
      message.channel.send({ embed });
}

module.exports.help = {
    name: "avatar"
}