const Discord = require('discord.js');
const client = new Discord.Client();
const {TOKEN, PREFIX} = require("./config");



client.on('ready', () => {
  console.log(`connecter avec  ${client.user.tag}!`);
});


client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("Pong!")

}).





client.login(TOKEN);

