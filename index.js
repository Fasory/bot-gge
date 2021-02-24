const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function (msg) {
  if (msg.content === "!ping") {
    msg.channel.send("!pong");
  }
})

bot.on('ready', function () {
  bot.user.setActivity('Prépa Øptimus', {type : 'COMPETING'});
  /*bot.user.setAvatar('./avatar.jpg').catch(console.error)
  for (serv in bot.guilds) {
    for (channel in serv.t)
    console.log(serv.channels.name)
  }*/
})

bot.login(process.env.TOKEN);
