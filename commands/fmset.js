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
    let lastFMUsername = args.join('');
      if (!lastFMUsername) {
          return message.reply('you need to enter the Last.fm account that you would like to link HoGBot to!');
      }
    
      try {
        
        lastFMAPIOptions.qs.method = 'user.getinfo';


        lastFMAPIOptions.qs.user = lastFMUsername;

        const result = await request(lastFMAPIOptions);

        // grab the database
        const db = await dbOpen 

        await db.run("INSERT INTO discordLastFMUser (discordID, lastFMUsername) VALUES (?, ?)", [message.member.user.id, lastFMUsername]);

        message.reply(`Last.fm account with name "${lastFMUsername}" linked!\n**NOTE**: You may have to link your account again to use the other fm commands, currently working on trying to set a database to store user info on Heroku!`);
      }
      catch (e) {
        message.reply(`failed to find user with name: ${lastFMUsername}!`);
        console.log(e);
      }   
}

module.exports.help = {
    name: 'fmset'
}
