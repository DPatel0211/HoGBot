const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (message.member.roles.some((r) => r.name === "New People")) {
        let newPeople = message.guild.roles.find(`name`, "New People");
        message.member.removeRole(newPeople.id);
        message.reply(`you have successfully removed the "New People" role from yourself!`);
      } else message.channel.send(`You can't use this command as you don't have the "New People" role to remove from yourself!`)
}

module.exports.help = {
    name: "removeNProle"
}