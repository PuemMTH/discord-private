module.exports = (client, triggerText) => {
    client.on('messageCreate', (message) => {
        if(message.content.toLowerCase() === triggerText.toLowerCase()){
            // message.send("replyText");
            message.author.send(
                {
                    embeds: [
                        {
                             title: `${client.user.username} help!`,
                             color: "GREEN",
                             description: 'รายการคำสั่งทั้งหมด',
                             fields: [
                                 {
                                     name: '/help (h)',
                                     value: 'แสดงคำสั่งและคำอธิบายทั้งหมด',
                                     inline: true,
                                 },
                                 {
                                     name: '/ping',
                                     value: 'แสดงปิงเฉลี่ยของบอท',
                                     inline: true,
                                 },
                                 {
                                     name: '/uptime (u)',
                                     value: 'ตรวจสอบเวลาทำงาน',
                                     inline: true,
                                 },
                                 {
                                     name: '\u200b/search',
                                     value: '\u200bค้นหาและเลือกวิดีโอเพื่อเล่น',
                                     inline: true,
                                 },
                                 {
                                     name: '/random',
                                     value: 'แสดงปิงเฉลี่ยของบอท',
                                     inline: true,
                                 },
                                 {
                                     name: '/.....',
                                     value: '..................',
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
