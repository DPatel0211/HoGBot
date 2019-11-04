const Discord = require('discord.js')
const sqlite  = require('sqlite');
let request = require('request-promise-native');
let dbOpen  = sqlite.open('./db.fmuserinfo', { Promise });
const { createCanvas, loadImage, registerFont } = require('canvas');
const lastFMAPIURL = 'http://ws.audioscrobbler.com/2.0/';
require('dotenv').config();
let LAST_FM_API_KEY = process.env.FM_API_KEY;
let lastFMAPIOptions = {
    url: lastFMAPIURL,
    qs: {
        'method': '',
        'user': '',
        'api_key': LAST_FM_API_KEY,
        'format': 'json'
    },
    headers: {
        "User-Agent": "HoGBot"
    },
    json: true
}; 

module.exports.run = async (client, message, args) => {
    const db = await dbOpen
      
    // try and grab the user association from sqlite
    try {
      const associationUser = await db.get("SELECT * FROM discordLastFMUser WHERE discordID = ?", message.member.user.id);

      if (associationUser === undefined) {
        message.reply('Looks like you haven\'t linked your Last.fm account yet. Do it now by using the "$fmset" command. (ex. $fmset `your_last_fm_username`)');
        return;
    }

    // set the options for getting the last.fm playing
    lastFMAPIOptions.qs.method = 'user.getrecenttracks';
    lastFMAPIOptions.qs.user = associationUser.lastFMUsername;

    const result = await request(lastFMAPIOptions);

   // make sure track isn't empty and if so find the first one
    if (result.recenttracks.track.length === 0) {
      return;
   }
    const firstTrack = result.recenttracks.track[0];

    // return the most recent track as "now playing"
    const artist = firstTrack.artist["#text"];
    const title  = firstTrack.name;

    const embed = new Discord.RichEmbed()
    .setColor(0xC8A2C8)
    .setAuthor(`Last Track Played by ${associationUser.lastFMUsername}`, 'http://icons.iconarchive.com/icons/sicons/basic-round-social/256/last.fm-icon.png')
    .addField(`Song Name:`, `${firstTrack.name}`, true)
    .addField(`Album:`, `${firstTrack.album["#text"]}`, true)
    .addField(`Artist:`, `${firstTrack.artist["#text"]}`, false)
    .addField(`${associationUser.lastFMUsername}'s Last.fm account:`, `https://www.last.fm/user/${associationUser.lastFMUsername}`)
    .setFooter('HoGBot user command')
    .setTimestamp();
    if (firstTrack.image.length > 0) {
      embed.setThumbnail(firstTrack.image[firstTrack.image.length - 1]["#text"]);
    }
    message.channel.send({embed}).then(async  embedMessage => {
        await embedMessage.react('👍');
        await embedMessage.react('👎');
      });
    }
    catch (e) {
        return;
   }
}

module.exports.help = {
    name: "fm"
}