module.exports = (client, triggerText) => {
    client.on('messageCreate', (message) => {
        if(message.content.toLowerCase() === triggerText.toLowerCase()){
            // message.send("replyText");
            const avatar = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`;
            function random_item(items){
                return items[Math.floor(Math.random()*items.length)];
            }
            const ArratOne = ["1","2","3","4","5","6","7","8","9"];
            const ArratTwo = ["1","2","3","4","5","6","7","8","9"];
            message.reply({
            embeds: [
                {
                        title: "help of users",
                        color: "GREEN",
                        fields: [
                            {
                                name: `${message.content}`,
                                value: `${random_item(ArratOne)} || ${random_item(ArratTwo)}`
                            },
                            {
                                name: '\u200b',
                                value: '\u200b',
                                inline: true,
                            }
                        ],
                        timestamp: new Date(),
                        footer: {
                            text:"Contribute @ github: https://github.com/puemmth",
                            iconURL: `${avatar}`
                        }
                }
            ]
            });


        }
    });
}
