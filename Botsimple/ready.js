module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "p! ping la seul commandes sniff !!"
        }
    });
};