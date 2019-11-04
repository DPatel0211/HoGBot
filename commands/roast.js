const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
      if (!user) {
        return message.reply('you gotta mention someone in order to roast them!');
      }

      if (user.id == '503334470062178304') {
        return message.reply("I can't roast myself! Try roasting someone else instead!");
      }
      var roast = [
        "Were you born on the highway? That is where most accidents happen.",
        "I was going to give you a nasty look... but I see you already have one.",
        "Remember when I asked for your opinion? Me neither.",
        "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
        "I'm trying to see things from your point of view, but I can't get my head that far up my ass.",
        "I haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
        "Two wrongs don't make a right, take your parents as an example.",
        "Just looking at you, I now understand why some animals eat their young offspring.",
        "Does time actually fly when you're having sex, or was it just one minute after all?",
        "You should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
        "This is why you dont have nice things",
        "My teacher told me to erase mistakes, i'm going to need a bigger eraser.",
        "You're IQ's lower than your dick size.",
        "Are you always such an idiot, or do you just show off when I’m around?",
        "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
        "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
        "You’re about as useful as a screen door on a submarine.",
        "You always bring me so much joy—as soon as you leave the room.",
        "Stupidity’s not a crime, so feel free to go.",
        "If laughter is the best medicine, your face must be curing the world.",
        "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
        "It looks like your face caught fire and someone tried to put it out with a hammer.",
        "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
        "Why is it acceptable for you to be an idiot but not for me to point it out?",
        "You're so fat you could sell shade.",
        "Your family tree must be a cactus because everyone on it is a prick.",
        "You'll never be the man your mother is.",
        "Just because you have an ass doesn't mean you need to act like one.",
        "Which sexual position produces the ugliest children? Ask your mother she knows.",
        "If I had a face like yours I'd sue my parents.",
        "The zoo called. They're wondering how you got out of your cage?",
        "Hey, you have something on your chin... no, the 3rd one down.",
        "Aww, it's so cute when you try to talk about things you don't understand.",
        "You are proof that evolution can go in reverse.",
        "Brains aren't everything. In your case they're nothing.",
        "You're so ugly when you look in the mirror, your reflection looks away.",
        "I'm sorry I didn't get that - I don't speak idiot.",
        "It's better to let someone think you're stupid than open your mouth and prove it.",
        "Were you born this stupid or did you take lessons?",
        "You're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
        "Don't you get tired of putting make up on two faces every morning?",
        "Hey, I'm straighter than the pole your mom dances on.",
        "If ugliness were measured in bricks, you would be the Great Wall of China.",
        "I thought I said goodbye to you this morning when I flushed the toilet",
        "If you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
        "Zombies are looking for brains. Don't worry. You're safe.",
        "spreading rumors? At least you found a hobby spreading something other than your legs.",
        "If you spoke your mind, you would be speechless",
        "I can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
        "Acting like a dick won't make yours any bigger",
        "If I wanted to hear from an asshole, I would have farted",
        "Roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
        "You remind me of a penny, two faced and worthless!",
        "I've met some pricks in my time but you my friend, are the f*cking cactus",
        "I'd slap you, but that would be animal abuse",
        "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
        "I know I’m talking like an idiot. I have to, other wise you wouldn't understand me.",
        "You're so dumb, your brain cell died of loneliness",
        "You shouldn't let your mind wander..its way to small to be out on its own",
        "I don't know what makes you so dumb, but its working",
        "You should put the diaper on your mouth, that's where the craps comin' out.",
        "You would be much more likable if it wasn’t for that hole in your mouth that stupid stuff comes out of. ",
        "Could you go away please, I'm allergic to douchebags",
        "If you had any intelligence to question I would have questioned it already.",
        "I wish I had a lower I.Q,  maybe then I could enjoy your company.",
        "I would answer you back but life is too short, just like your d*ck",
        "Mirrors don't lie. Lucky for you, they can't laugh either.",
        "I was right there are no humans in this channel",
        "You have a face not even a mother could love....",
        "You know what I would find if I looked up idiot in the dictionary a picture of you?",
        "You make the guys on Jackass look like Einstein.....",
        "I would slap you but I don't want to make your face look any better",
        "Sorry, I can't put small objects in my mouth or I'll choke",
        "You should wear a condom on your head, if you're going to be a dick you might as well dress like one",
        "Have you been shopping lately? They're selling lives at the mall, you should get one"

      ];
      var roasts = roast[Math.floor(Math.random() * roast.length)];
      message.channel.send(`${user}` + " " + roasts);
}

module.exports.help = {
    name: "roast"
}