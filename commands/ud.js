const Discord = require('discord.js')
const urban = require('relevant-urban')

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.reply("uhhh, you need to write in the word you're trying to define, dummy.");
      }
      let res = await urban(args.join(' ')).catch(e => {
        return message.channel.send("***Sorry, the word you are looking to define can't be found in our database!***");
      });


      const embed = new Discord.RichEmbed()
      .setColor(0xC8A2C8)
      .setThumbnail('https://i.ibb.co/SVSkHWr/Screenshot-2019-01-19-at-6-42-19-PM.png')
      .addField(`**Definition for '${res.word}':**`, `${res.definition}`)        .addField(`** **`, `** **`)
      .addField('**Example:**', `${res.example}`)
      .addField(`** **`, `** **`)
      .addField('Rating:', `${res.thumbsUp} 👍 | ${res.thumbsDown} 👎`)
      .addField(`Link:`, res.urbanURL)
      .setFooter("HoGBot user command")
      .setTimestamp();

      if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {
        embed.addField(`Tags:`, res.tags.join(`, `), true)
      }

      message.channel.send(embed);
}

module.exports.help = {
    name: "ud"
}