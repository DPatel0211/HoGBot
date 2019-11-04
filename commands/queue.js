const Discord = require('discord.js')

module.exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if (!fetched) {
        message.channel.send(`There currently isn't any music playing! Please queue a song with $play to view the queue!`);
    }

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `__**Now Playing:**__\n${nowPlaying.songTitle} | Requested by: ${nowPlaying.requester}\n\n__**Queue**__\n`;

    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. ${queue[i].songTitle} | Requested by: ${queue[i].requester}\n`;
    }

    message.channel.send(resp);
}

module.exports.help = {
    name: 'queue'
}