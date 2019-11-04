const Discord = require ('discord.js')
const ytSearch = require('yt-search')

module.exports.run = async (client, message, args) => {
    let temp = args.join(' ');
      if (!temp) {
        return message.reply('you need to type in what you want to search on YouTube!');
      }
      ytSearch(temp, function (err, r) {
        if (err) {
          throw err;
        } var videos = r.videos;
        const firstResult = videos[0];
        const secondResult = videos[1];
        const thirdResult = videos[2];
        const fourthResult = videos[3];
        const fifthResult = videos[4];

        console.log(firstResult);
        const embed = new Discord.RichEmbed()
          .setColor(0xC8A2C8)
          .setThumbnail('https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square2-512.png')
          .setTitle("Select the video by replying with the number that most accurately fits your search:")
          .addField(`1. ${firstResult.title}`, ` ${firstResult.author.name} | ${firstResult.ago} | ${firstResult.views} views`)
          .addField(`2. ${secondResult.title}`, ` ${secondResult.author.name} | ${secondResult.ago} | ${secondResult.views} views`)
          .addField(`3. ${thirdResult.title}`, ` ${thirdResult.author.name} | ${thirdResult.ago} | ${thirdResult.views} views`)
          .addField(`4. ${fourthResult.title}`, `${fourthResult.author.name} | ${fourthResult.ago} | ${fourthResult.views} views`)
          .addField(`5. ${fifthResult.title}`, `${fifthResult.author.name} | ${fifthResult.ago} | ${fifthResult.views} views`)
          .addField('------------------------------------', "**write '$cancel' to end the YouTube search command query**")
          .setFooter(`HoGBot user command`)
          .setTimestamp();
        message.channel.send({ embed });
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000 });
        collector.on('collect', message => {
          if (message.content === "1") {
            const embed = new Discord.RichEmbed()
              .setColor(0xC8A2C8)
              .setThumbnail('https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square2-512.png')
              .setTitle(`Youtube Search`)
              .addField('Video Title:', `${firstResult.title}`)
              .addField(`by ${firstResult.author.name}`, `${firstResult.ago} | ${firstResult.views} views`)
              .addField(`Link:`, `https://www.youtube.com${firstResult.url}`)
              .addField('Duration:', `${firstResult.duration.timestamp} min (${firstResult.duration.seconds} sec)`)
              .addField('------------------------------------', "**write '$cancel' to end the YouTube search command query**")
              .setFooter("HoGBot user command")
              .setTimestamp();
            message.channel.send({ embed });
          } else if (message.content === "2") {
            const embed = new Discord.RichEmbed()
              .setColor(0xC8A2C8)
              .setThumbnail('https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square2-512.png')
              .setTitle(`Youtube Search`)
              .addField('Video Title:', `${secondResult.title}`)
              .addField(`by ${secondResult.author.name}`, `${secondResult.ago} | ${secondResult.views} views`)
              .addField(`Link:`, `https://www.youtube.com${secondResult.url}`)
              .addField('Duration:', `${secondResult.duration.timestamp} min (${secondResult.duration.seconds} sec)`)
              .addField('------------------------------------', "**write '$cancel' to end the YouTube search command query**")
              .setFooter("HoGBot user command")
              .setTimestamp();
            message.channel.send({ embed });
          } else if (message.content === '3') {
            const embed = new Discord.RichEmbed()
              .setColor(0xC8A2C8)
              .setThumbnail('https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square2-512.png')
              .setTitle(`Youtube Search`)
              .addField('Video Title:', `${thirdResult.title}`)
              .addField(`by ${thirdResult.author.name}`, `${thirdResult.ago} | ${thirdResult.views} views`)
              .addField(`Link:`, `https://www.youtube.com${thirdResult.url}`)
              .addField('Duration:', `${thirdResult.duration.timestamp} min (${thirdResult.duration.seconds} sec)`)
              .addField('------------------------------------', "**write '$cancel' to end the YouTube search command query**")
              .setFooter("HoGBot user command")
              .setTimestamp();
            message.channel.send({ embed });
          } else if (message.content === '4') {
            const embed = new Discord.RichEmbed()
              .setColor(0xC8A2C8)
              .setThumbnail('https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square2-512.png')
              .setTitle(`Youtube Search`)
              .addField('Video Title:', `${fourthResult.title}`)
              .addField(`by ${fourthResult.author.name}`, `${fourthResult.ago} | ${fourthResult.views} views`)
              .addField(`Link:`, `https://www.youtube.com${fourthResult.url}`)
              .addField('Duration:', `${fourthResult.duration.timestamp} min (${fourthResult.duration.seconds} sec)`)
              .addField('------------------------------------', "**write '$cancel' to end the YouTube search command query**")
              .setFooter("HoGBot user command")
              .setTimestamp();
            message.channel.send({ embed });
          } else if (message.content === '5') {
            const embed = new Discord.RichEmbed()
              .setColor(0xC8A2C8)
              .setThumbnail('https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square2-512.png')
              .setTitle(`Youtube Search`)
              .addField('Video Title:', `${fifthResult.title}`)
              .addField(`by ${fifthResult.author.name}`, `${fifthResult.ago} | ${fifthResult.views} views`)
              .addField(`Link:`, `https://www.youtube.com${fifthResult.url}`)
              .addField('Duration:', `${fifthResult.duration.timestamp} min (${fifthResult.duration.seconds} sec)`)
              .addField('------------------------------------', "**write '$cancel' to end the YouTube search command query**")
              .setFooter("HoGBot user command")
              .setTimestamp();
            message.channel.send({ embed });
          } else if (message.content === '$cancel') {
            collector.stop();
          }
        });
        collector.on('end', collected => {
          message.channel.send('Ending YouTube search command query...');
        });
      });
}

module.exports.help = {
    name: 'yt'
}