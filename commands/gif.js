const Discord = require('discord.js')
const GphApiClient = require('giphy-js-sdk-core')
require('dotenv').config();
const giphy = GphApiClient(process.env.GPHY_KEY)

module.exports.run = async (client, message, args) => {
    let temp = args.join(' ');
      if (!temp) {
        message.reply(',you need to search something to get a GIF result from GIPHY!');
      }
      giphy.search('gifs', { "q": temp, limit: 1, rating: 'pg-13' })
        .then((response) => {
          response.data.forEach((gifObject) => {
            const embed = new Discord.RichEmbed()
              .setAuthor(`GIPHY.com search result for '${temp}'`, 'http://artfcity.com/wp-content/uploads/2015/03/LOLOMGUHHWTF.gif')
              .setImage(`https://media.giphy.com/media/${gifObject.id}/giphy.gif`)
              .setColor(0xC8A2C8)
              .addField('Not the right GIF?', 'Feel free to use the command again!')
              .setFooter("HoGBot user command")
              .setTimestamp();
            message.channel.send({ embed });
          })
        })
        .catch((err) => {
          message.reply("sorry, we couldn't find the GIF(s) you were looking for!");
        })

}

module.exports.help = {
    name: 'gif'
}