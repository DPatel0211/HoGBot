const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.some(r => ["Server Team", "Server Assistance", "Owners", "Trusted", "test"].includes(r.name))) {
        return message.reply("you don't have the permissions to access this command!");
      }

      const embed = new Discord.RichEmbed()
        .setColor(0xC8A2C8)
        .setThumbnail("https://i.ibb.co/JRJH11h/Terminal-02.jpg")
        .setTitle("HoGBot Moderator Commands")
        .addField("$ban `@user` `reason`", "bans mentioned user when given a reason")
        .addField("$kick `@user` `reason`", "kicks mentioned user when given a reason")
        .addField("$mute `@user` `reason`", "mutes mentioned user when given a reason")
        .addField("$unmute `@user`", "unmutes mentioned user if they have the muted role")
        .addField("$warn `@user` `reason`", "warns mentioned user when given in reason, warns aren't logged but can be referenced when searched")
        .addField("$purge `#_of_messages`", "purges/clears a given number of messages in the channel the command is executed in")
        .addField("$vckick `@user/bot`", "kicks the tagged user or bot from the voice channel that they're in")
        .setFooter("HoGBot moderator command")
        .setTimestamp();
      message.channel.send({ embed });
}

module.exports.help = {
    name: "mod"
}
