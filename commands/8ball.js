const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let question = args.slice(0).join(' ');
      if (!question) {
        return message.reply('you must ask a question to the 8-ball!');
      }

      var answers = [
        '8-ball: Maybe.', '8-ball: Lol no.', '8-ball: I really hope so.', '8-ball: Not in your wildest dreams.',
        '8-ball: There is a good chance.', '8-ball: Quite likely.', '8-ball: I think so.', '8-ball: I hope not.',
        '8-ball: I hope so.', '8-ball: Never!', '8-ball: NOOPE!', '8-ball: Ahaha! Really?!?', '8-ball: Pfft.',
        '8-ball: Sorry, no.', '8-ball: yeaaa.', '8-ball: Hell to the no.', '8-ball: ehhhhhh, i dont know.',
        '8-ball: The future is uncertain.', '8-ball: I would rather not say.', '8-ball: Who cares?',
        '8-ball: Possibly.', '8-ball: Never, ever, ever.', '8-ball: There is a small chance.', '8-ball: Yes!'];
      var answer = answers[Math.floor(Math.random() * answers.length)];

      message.channel.send(answer);
}

module.exports.help = {
    name: "8ball"
}