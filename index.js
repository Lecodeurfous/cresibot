const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`connecter avec  ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.TOKEN);