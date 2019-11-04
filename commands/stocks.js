const Discord = require('discord.js')
const request = require('node-superfetch')
const {formatNumber, base64} = require('util.js')
require('dotenv').config();

module.exports.run = async (client, message, args) => {
    const ALPHA_VANTAGE_KEY = process.env.VANTAGE_KEY;

      const symbol = args[0];
      if (!symbol) {
        return message.reply("make sure to include the stock symbol for the stock you are searching for (ie. $stocks `stock_symbol`)! \nIf you don't know the stock symbol for the stock you want to search for, look it up on https://www.marketwatch.com/tools/quotes/lookup.asp");
      }
      try {
        const { body } = await request
          .get('https://www.alphavantage.co/query')
          .query({
            function: 'TIME_SERIES_INTRADAY',
            symbol,
            interval: '1min',
            apikey: ALPHA_VANTAGE_KEY
          });
        if (body['Error Message']) {
          return message.reply("could not find any results. If you don't know the stock symbol for the stock you want to search for, look it up on https://www.marketwatch.com/tools/quotes/lookup.asp");
        }
        const data = Object.values(body['Time Series (1min)'])[0];
        const embed = new Discord.RichEmbed()
          .setTitle(`Stocks for ${symbol.toUpperCase()} (1min)`)
          .setThumbnail('https://i.ibb.co/q0GkMt7/stock-icon.png')
          .setColor(0xC2A2C8)
          .setFooter('Last Updated')
          .setTimestamp(new Date(body['Meta Data']['3. Last Refreshed']))
          .addField('Open:', `$${formatNumber(data['1. open'])}`, true)
          .addField('Close:', `$${formatNumber(data['4. close'])}`, true)
          .addField('Volume:', formatNumber(data['5. volume']), true)
          .addField('High:', `$${formatNumber(data['2. high'])}`, true)
          .addField('Low:', `$${formatNumber(data['3. low'])}`, true)
          .addField('Stock data via:', "https://www.alphavantage.co/");
        return message.channel.send({embed});
		  } catch (err) {
			  return message.reply(`oh no, an error occurred: \`${err.message}\`. Try again later!`);
		  } 
}

module.exports.help = {
    name: "stocks"
}