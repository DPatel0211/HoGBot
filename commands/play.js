const Discord = require('discord.js')
const ytdl = require('ytdl-core')

module.exports.run = async (client, message, args, ops) => {
    if (!message.member.voiceChannel) {
        return message.reply("you need to connect to a voice channel to use this command!");
      }
      if (!args[0]) {
        return message.reply("you need to input a YouTube URL following the command!");
      }
      let validate = ytdl.validateURL(args[0]);
      if (!validate) {
        message.channel.send("Please enter a **valid** YouTube URL link!");
      }
      else try {
        let info = await ytdl.getInfo(args[0]);
        let data = ops.active.get(message.guild.id) || {};
        if (!data.connection) {
          data.connection = await message.member.voiceChannel.join();
        }
        if (!data.queue) {
          data.queue = [];
        }
        data.guildID = message.guild.id;
        data.queue.push({
          songTitle: info.title,
          requester: message.author.tag,
          url: args[0],
          announceChannel: message.channel.id
        });

        if (!data.dispatcher) {
          play(client, ops, data);
        } else {
          message.channel.send(`Added to Queue: ${info.title} | Requested by: ${message.author.tag}`);
        }
        
        ops.active.set(message.guild.id, data);
        
      } catch (error) {
        console.log(`HoGBot could not connect to the voice channel because of: ${error}`);
      }
}

async function play(client, ops, data) {
  client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested by: ${data.queue[0].requester}`);

  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly'}));
  data.dispatcher.guildID = data.guildID;

  data.dispatcher.once('end', function() {
    finish(client, ops, data);
  });
}

function finish(client, ops, dispatcher) {
  let fetched = ops.active.get(dispatcher.guildID);

  fetched.queue.shift();

  if (fetched.queue.length > 0) {
    ops.active.set(dispatcher.guildID, fetched);

    play(client, ops, fetched);
  } else {
    ops.active.delete(dispatcher.guildID);
    let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
    if (vc) {
      vc.leave();
      message.channel.send('Queue empty! Now leaving the voice channel...')
    }
  }
}

module.exports.help = {
    name: "play"
}