module.exports = (client, triggerText) => {
    client.on('messageCreate', (message) => {
        if(message.content.toLowerCase() === triggerText.toLowerCase()){
            let user = message.user;
            message.reply(`${user}replyText`); 
            // undefinedreply
        }
    });
}
