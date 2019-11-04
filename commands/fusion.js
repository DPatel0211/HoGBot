const Discord = require('discord.js')
let request = require('node-superfetch')
const { createCanvas, loadImage, registerFont } = require('canvas');

module.exports.run = async (client, message, args) => {
    let overlay = message.author;
      let base = message.mentions.users.first();

      if (!base) {
        return message.reply('you need to tag a user to user this command, wise guy.');
      }

      const baseAvatarURL = base.avatarURL;
		  const overlayAvatarURL = overlay.avatarURL;
      try {
        const baseAvatarData = await request.get(baseAvatarURL);
        const baseAvatar = await loadImage(baseAvatarData.body);
        const overlayAvatarData = await request.get(overlayAvatarURL);
        const overlayAvatar = await loadImage(overlayAvatarData.body);
        const canvas = createCanvas(baseAvatar.width, baseAvatar.height);
        const ctx = canvas.getContext('2d');
        ctx.globalAlpha = 0.5;
        ctx.drawImage(baseAvatar, 0, 0);
        ctx.drawImage(overlayAvatar, 0, 0, baseAvatar.width, baseAvatar.height);
        return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'avatar-fusion.png' }] });
      } catch (err) {
        return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
      }
}

module.exports.help = {
    name: "fusion"
}