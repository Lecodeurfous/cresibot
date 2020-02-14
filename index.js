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

client.on('guildMemberAdd', user =>{
 let bvnembed = new Discord.RicheEmbed()
   .setColor("#48fb00")
   .setAuthor(user.user.username, user.user.displayAvatarURL)
   .setDescription("Bienvenue " + user + "sur le serveur" + user.guimd.name + "!")
   .setFooter(user.guild.name + "Bot crésibot")
   user.guild.channels.get("674290099047104513").send(bvnembed);
 
  
});

client.on('guildMemberRemove', user =>{
  let aurvbed = new Discord.RicheEmbed()
   .setColor("#48fb00")
   .setAuthor(user.user.username, user.user.displayAvatarURL)
   .setDescription("Au revoir" + user.user.username )
   .setFooter(user.guild.name + "Bot crésibot")
   user.guild.channels.get("674290099047104513").send(aurvbed);
  
});

client.login(process.env.TOKEN);