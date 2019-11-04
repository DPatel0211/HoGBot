const Discord = require('discord.js')
const sqlite  = require('sqlite');
let request = require('request-promise-native');
//const { shorten, formatNumber, base64, trimArray } = require('./util.js');
let dbOpen  = sqlite.open('./db.fmuserinfo', { Promise });
const { createCanvas, loadImage, registerFont } = require('canvas');
require('dotenv').config();
let LAST_FM_API_KEY = process.env.FM_API_KEY;
const lastFMAPIURL = 'http://ws.audioscrobbler.com/2.0/';
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
    require('dotenv').config();
      registerFont('./roboto-bold.ttf', { family: 'Roboto Bold' });
      let request = require('request-promise-native');
      const db = await dbOpen;
      try {
        const associationUser = await db.get("SELECT * FROM discordLastFMUser WHERE discordID = ?", message.member.user.id);

        if (associationUser === undefined) {
            message.reply('Looks like you haven\'t linked your Last.fm account yet. Do it now by using the "$fmset" command. (ex. $fmset `your_last_fm_username`)');
            return;
        }
        lastFMAPIOptions.qs.method = 'user.gettoptracks';
        lastFMAPIOptions.qs.user   = associationUser.lastFMUsername;
        lastFMAPIOptions.qs.period = '7day';

        const result = await request(lastFMAPIOptions);


        // create a canvas to draw the 3x3
        const canvas = createCanvas(900, 900);
        const ctx = canvas.getContext('2d');

        let xOff = 0;
        let yOff = 0;

        ctx.fillStyle = "black";
        ctx.fillRect(
            0,
            0,
            900,
            900
        );

        let count = result.toptracks.track.length;

        if (count > 9) {
          count = 9;
        }

        for (let i = 0; i < count; i++) {
          
          const track = result.toptracks.track[i];
            
          if (track.image[track.image.length - 1]["#text"] !== '') {
            const trackArt = await loadImage(track.image[track.image.length - 1]["#text"]);

            ctx.drawImage(
              trackArt,
              xOff,
              yOff
            );
          }

          ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
          ctx.fillRect(
            xOff,
            yOff,
            xOff + 300,
            yOff + 300
          );

          ctx.fillStyle = "white";
          ctx.font = "16px Roboto Bold";

          ctx.fillText(
                track.name,
                xOff + 24,
                (yOff + 300) - 24
            );
            ctx.fillText(
                track.artist.name,
                xOff + 24,
                (yOff + 300) - 48
            );

            xOff += 300;

            if (xOff >= 900) {
                xOff  = 0;
                yOff += 300;
            }
        }

        const stream = canvas.createPNGStream();
        const attachment = new Discord.Attachment(stream); 

        message.channel.send(`${message.author}'s 3x3 Top Tracks Chart of the Week (via Last.fm: https://www.last.fm/user/${associationUser.lastFMUsername})`, attachment).then(async embedMessage => {
          await embedMessage.react('👍');
          await embedMessage.react('👎');
        });
      }
      catch (e) {
        return;
      }
}

module.exports.help = {
    name: "fmweekly-tracks"
}