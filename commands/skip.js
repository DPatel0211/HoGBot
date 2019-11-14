const Discord = require('discord.js')

module.exports.run = async (client, message, args, ops) => {
    let ops = client.ops
    let fetched = ops.active.get(message.guild.id)
    if (!fetched) {
        return message.channel.send("Nothing is currently playing! Please queue a song w/ $play `YouTube url` to be able to use this command!");   
    }
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) {
        return message.reply("you must be in the same voice channel as the bot to use this command!");
    }
    ops.active.set(message.guild.id, fetched);
    fetched.queue.shift()

    if (fetched.queue.length > 0) {
        async function play(client, ops, data) {


            const ytdl = require("ytdl-core")
            client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested by ${data.queue[0].requester}`)
            data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }))
            data.dispatcher.guildID = data.guildID
            data.dispatcher.once('finish', function () {
                finish(client, ops, this)
            })
        }
        ops.active.set(fetched.dispatcher.guildID, fetched)
        play(client, ops, fetched)
    } else {
        ops.active.delete(fetched.dispatcher.guildID)
        let vc = client.guilds.get(fetched.dispatcher.guildID).me.voiceChannel
        if (vc) vc.leave()
    }
    message.channel.send("Skipped!")
}
}

module.exports.help = {
    name: 'skip'
}
