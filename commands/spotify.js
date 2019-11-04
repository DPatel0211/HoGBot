const Discord = require('discord.js') 

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
      if (user.presence.game !== null && user.presence.game.type == 2 && user.presence.game.name === `Spotify` && user.presence.game.assets !== null) {


        // variables needed for embed message
        let trackIMG = `https://i.scdn.co/image/${user.presence.game.assets.largeImage.slice(8)}`;
        let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`;
        let trackName = user.presence.game.details;
        let trackAuthor = user.presence.game.state;
        let trackAlbum = user.presence.game.assets.largeText;

        // creating the embed object 
        const embed = new Discord.RichEmbed()
          .setAuthor('Spotify Track Info', "https://cdn.discordapp.com/emojis/408668371039682560.png")
          .setColor(0xC8A2C8)
          .setThumbnail(trackIMG)
          .addField('Song Name', trackName, true)
          .addField(`Album`, trackAlbum, true)
          .addField('Artist', trackAuthor, false)

          .addField('Listen to Track:', `${trackURL}`, false)
          .setFooter("HoGBot user command")
          .setTimestamp();

        message.channel.send({ embed }).then(async embedMessage => {
          await embedMessage.react('👍');
          await embedMessage.react('👎');
        });
      } else message.reply("this user isn't listening to Spotify!");
}

module.exports.help = {
    name: "spotify"
}