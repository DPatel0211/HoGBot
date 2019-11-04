const Discord = require('discord.js')
const request = require('node-superfetch')
let moment = require('moment')
const {base64, shorten, formatNumber} = require('util.js')
require('dotenv').config();
const GITHUB_USERNAME = process.env.GH_USERNAME;
const GITHUB_PASSWORD = process.env.GH_PW;

module.exports.run = async (client, message, args) => {

      let author = args[0];
      let repository = args[1];

      if (!author) {
        return message.reply("please include the repository author and repository name to look for a repository via this command (ie. $github `author` `repository_name`)!");
      }

      if (!repository) {
        return message.reply("please include the repository author and repository name to look for a repository via this command (ie. $github `author` `repository_name`)!");
      }

      try {
        const { body } = await request
          .get(`https://api.github.com/repos/${author}/${repository}`)
          .set({ Authorization: `Basic ${base64(`${GITHUB_USERNAME}:${GITHUB_PASSWORD}`)}` });
        const embed = new Discord.RichEmbed()
          .setColor(0xC2A2C8)
          .setAuthor('GitHub', 'https://i.imgur.com/e4HunUm.png', 'https://github.com/')
          .setTitle(body.full_name)
          .setURL(body.html_url)
          .setDescription(body.description ? shorten(body.description) : 'No description.')
          .setThumbnail(body.owner.avatar_url)
          .addField('Stars:', formatNumber(body.stargazers_count), true)
          .addField('Forks:', formatNumber(body.forks), true)
          .addField('Issues:', formatNumber(body.open_issues), true)
          .addField('Language:', body.language || '???', true)
          .addField('Creation Date:', moment.utc(body.created_at).format('MM/DD/YYYY h:mm A'), true)
          .addField('Modification Date:', moment.utc(body.updated_at).format('MM/DD/YYYY h:mm A'), true);
        return message.channel.send({embed});
      } catch (err) {
        if (err.status === 404) {
          return message.reply('could not find any results! Please try again!');
        }
        return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		  }
}

module.exports.help = {
    name: 'github'
}