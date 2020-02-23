const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


client.on('ready', () => {
  console.log(`connecter avec  ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'test') {
    msg.reply(`5/5`+ user.user.displayAvatarURL);
  }
});


client.on('guildMemberAdd', user =>{
 let bvnembed = new Discord.RicheEmbed()
   .setColor("#48fb00")
   .setAuthor(user.user.username, user.user.displayAvatarURL)
   .setDescription("Bienvenue " + user + "sur le serveur" + user.guild.name + "!")
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