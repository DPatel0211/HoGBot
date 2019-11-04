const Discord = require('discord.js')
const request = require('node-superfetch')
const { trimArray, base64 } = require('util.js')
const moment = require('moment')

module.exports.run = async (client, message, args) => {
    let pkg = args[0];

      if (!pkg) {
        return message.reply('you need to include the package name you want to search for to use this command (ie. $npm `package_name`)!');
      }

      try {
        const { body } = await request.get(`https://registry.npmjs.com/${pkg}`);
        if (body.time.unpublished) return msg.say('This package no longer exists.');
        const version = body.versions[body['dist-tags'].latest];
        const maintainers = trimArray(body.maintainers.map(user => user.name));
        const dependencies = version.dependencies ? trimArray(Object.keys(version.dependencies)) : null;
        const embed = new Discord.RichEmbed()
          .setColor(0xC2A2C8)
          .setAuthor('NPMJS package information for:', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/')
          .setTitle(body.name)
          .setURL(`https://www.npmjs.com/package/${pkg}`)
          .setDescription(body.description || 'No description.')
          .addField('Version:', body['dist-tags'].latest, true)
          .addField('License:', body.license || 'None', true)
          .addField('Author:', body.author ? body.author.name : '???', true)
          .addField('Created on:', moment.utc(body.time.created).format('MM/DD/YYYY | h:mm A'), true)
          .addField('Last Modified:', moment.utc(body.time.modified).format('MM/DD/YYYY | h:mm A'), true)
          .addField('Main File:', version.main || 'index.js', true)
          .addField('Dependencies:', dependencies && dependencies.length ? dependencies.join(', ') : 'None')
          .addField('Maintainers:', maintainers.join(', '))
          .setFooter('HoGBot search command')
          .setTimestamp();
        return message.channel.send({embed});
		  } catch (err) {
        if (err.status === 404) {
          return message.reply("Could not find any results. Make sure that you're searching for the exact package name and to replace any spaces with dashes (ie. $npm discord-rpc).");
        }
        return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		  }
}

module.exports.help = {
    name: "npm"
}