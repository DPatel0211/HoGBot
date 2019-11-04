const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let role = args.join(' ')

      if (!role) {
        return message.reply("please mention the role that you would like to receive!");
      }

      let gRole = message.guild.roles.find(`name`, role);
      if (!gRole) {
        return message.reply("we couldn't find the role you were looking for!");
      }
      if (message.member.roles.some((r) => r.name === role)) {
        await message.member.removeRole(gRole.id);
        return message.reply(`you have successfully removed the ${gRole.name} role from yourself!`).catch(console.log(`${message.author.username} has removed the ${gRole.name} role from themself, tuff.`));
      }

      await message.member.addRole(gRole.id);
      return message.reply(`you have successfully added the ${gRole.name} role to yourself!`).catch(console.log(`${message.author.username} has received the ${gRole.name} role!`));

}

module.exports.help = {
    name: 'role'
}