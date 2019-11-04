const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor(0xC2A2C8)
      .setTitle('Search Commands Help')
      .setThumbnail('https://i.ibb.co/B2J1WFK/Ho-GBot-search.png')
      .addField('$ud `word`', 'searches up `word` in Urban Dictionary and returns the UD defintion along w/ an example')
      .addField('$yt `query`', 'searches for vids on YouTube and displays the first 5 videos that are related closest to the `query`')
      .addField('$gif `query`', 'searches for GIFs related to the `query` on https://www.giphy.com')
      .addField('$stocks `stock_symbol`', "displays the latest feed of a given company's stock in the last 24hrs in NYSE (ie. $stocks AAPL)")
      .addField("$npm `package_name`", `searches for and displays the information of an NPM package via NPMJS.com (where this bot gets most of it's abilities from)`)
      .addField('$github `author` `repository_name`', "searches up for `repository_name` given the repository `author`'s name on https://www.github.com")
      .setFooter('HoGBot user command')
      .setTimestamp();
      message.channel.send({embed});
}

module.exports.help = {
    name: "search"
}