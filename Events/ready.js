module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "Le help ne fonctionne pas "
        }
    });
};