const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let guild = message.guild;
    let sicon = message.guild.iconURL;
    let embed = new Discord.RichEmbed()
      .setColor(0xC8A2C8)
      .setThumbnail(sicon)
      .setTitle(`${guild.name} [id: ${guild.id}]`)
      .addField(`Founder: ${message.guild.owner.user.username}`, `Founded on: ${guild.createdAt}`)
      .addField("Region:", `${guild.region}`)
      .addField("Member Count:", `${guild.memberCount}`)
      .addField("Roles:", `${guild.roles.size}`)
      .addField("Channels:", `${guild.channels.size}`)
      .addField("Users Online:", `${guild.members.filter(m => m.user.presence.status === "online").size}`)
      .addField("Users DND:", `${guild.members.filter(m => m.user.presence.status === "dnd").size}`)
      .addField("Users Offline:", `${guild.members.filter(m => m.user.presence.status === "offline").size}`)
      .setFooter("HoGBot user command")
      .setTimestamp();
    message.channel.send({ embed });
}

module.exports.help = {
    name: "serverinfo"
}