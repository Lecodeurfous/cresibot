const Discord = require('discord.js')




module.exports.run = (client, message, args) => {
    
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Page d'aide de ${client.user.username}`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: '`p!ping`',
                    value: "Permet de savoir la latence du Bot"
                },
                {
                    name: '`help`',
                    value: "Cette commande "
                },
                {
                    name: '`p!clear`',
                    value: "Permet de supprimer les messages "
                },
                {
                    name: '`p!stats `',
                    value: "Permet d'avoir les statistique d'un utilisateur "
                },
                {
                    name: '`p!delrôle`',
                    value: "Permet de supprimer un rôle "
                },
                {
                    name: '`p!addrôle`',
                    value: "Permet d'ajouter un rôle si vous avez la permission"
                },
                {
                    name: '`p!kick`',
                    value: "Permet de kick un utilisateur"
                },
                {
                    name: '`p!Ban`',
                    value: "Permet de bannir un utilisateur"
                }
            ],
            footer: {
                text: `Page d'aide de protec'toi [bot] `
            }
        }
    });
};

module.exports.help = {
    name: 'help'
};
  
    

