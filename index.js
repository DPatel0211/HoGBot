  const Discord = require('discord.js');
  const client = new Discord.Client();
  const fs = require('fs');
  client.commands = new Discord.Collection()
  require('dotenv').config();
  const ownerID = process.env.OWNER_ID
  const token = process.env.CLIENT_TOKEN
  const foobar = new Map();

  fs.readdir("./commands/", (err, files) => {
      
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js')

    if (jsfile.length <= 0) {
        console.log("Couldn't find commands");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
  });
 

client.on('ready', () => {
    setInterval(function () {
      let statuses = ['Hosted w/ Heroku','made w/ JavaScript', "command prefix is '$'", 'developed by @DPatel#1426','https://github.com/DPatel0211/HoGBot/'];
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setPresence({ game: { name: status }, status: 'dnd'});
    }, 4000);
    console.log("Would you look at that, we're live!");
  });

client.on("message", async message => {
    let prefix = process.env.PREFIX;
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let ops = {
      ownerID: ownerID,
      active: foobar
    }
    let commandfile = client.commands.get(cmd.slice(prefix.length))
    if (commandfile) commandfile.run(client,message, args, ops);
});

client.on("message", async message => {
  if (message.content.startsWith("rt")) {
      const emoji = message.guild.emojis.find(emoji => emoji.name === 'rt');
      message.react(emoji);
  }
});

client.login(token);
