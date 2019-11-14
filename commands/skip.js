const Discord = require('discord.js')

module.exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) {
      return message.channel.send("There currently isn't any music playing! Use $play `youtube url` to queue up a song!");
    }
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) {
      return message.channel.send("You aren't in a voice channel to use this command! Try joining the voice channel to access this command!");
    }
    
    let userCount message.member.voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);
    
    if (!fetched.queue[0].voteSkips) {
      fetched.queue[0].voteSkips = [];
    }
    
    if (fetched.queue[0].voteSkips.includes(message.member.id)) {
      return message.reply(`You already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} needed to skip the song!`);
    }
    
    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);
    
    if (fetched.queue[0].voteSkips.length >= required) {
      return message.channel.send("Song skipped!");
      return fetched.dispatcher.emi('finish');
    }
    
    message.channel.send(`Voted to skip! ${fetched.queue[0].voteSkips.length}/${required} votes still needed to skip...`);
}

module.exports.help = {
    name: 'skip'
}
