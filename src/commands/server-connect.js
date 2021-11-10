module.exports = (client, triggerText) => {
    client.on('messageCreate', (message) => {
        if(message.content.toLowerCase() === triggerText.toLowerCase()){
            // message.send("replyText");
            client.guilds.cache.forEach(guild => {
                console.log(guild.name)
            })
            message.author.send(
                {
                    embeds: [
                        {
                             title: `${client.user.username} ls-server!`,
                             color: "GREEN",
                             description: 'เชื่อมต่อทั้งหมด -',
                             fields: [
                                 {
                                     name: '/help (h)',
                                     value: 'แสดงคำสั่งและคำอธิบายทั้งหมด',
                                     inline: true,
                                 }
                             ],
                             image: {
                                 url: `https://cdn.discordapp.com/avatars/655438089673768982/1d6db6e3b28ea014471c74d731fc2d49.png?size=256`,
                             },
                             timestamp: new Date(),
                             footer: {
                                 text:"Contribute @ github: https://github.com/puemmth",
                                 iconURL: `https://cdn.discordapp.com/avatars/655438089673768982/1d6db6e3b28ea014471c74d731fc2d49.png?size=256`
                             }
                        }
                    ]
             }
            );



        }
    });
}
