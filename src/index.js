const { Client, Intents, MessageEmbed } = require('discord.js');
var mysql = require('mysql');
const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ]
});
const config = require('./data/config.json');
const menu = require('./data/menu.json');
const helpMessage = require('./commands/help-message');
const rand = require('./commands/random');

// const Coins = ["Heads","Tails"]
// let Generate = Math.floor((Math.random() * menu.length));

// input = "";


// let findTags = menu.find((menu) => {
//     return menu;
// });

client.on('ready',() => {
    console.log(`Ready! ${client.user.tag}!`);
    helpMessage(client,`${config.prefix}help`);
    rand(client,`${config.prefix}ran`);
});


// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM `discord-logs`", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
// });


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xT54rNDN",
    database: "ku-cs"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
// INSERT INTO `discord-logs` (`id`, `username`, `dsjs_name`, `dsjs_groups`, `dsjs_channel`, `dljs_message`) VALUES (NULL, 'Tsusuba#0000', 'คุยกับหวานใจ', 'iloveyou', 'asdasd', 'asdasasdasdasdasdasdasdasd');
client.on('messageCreate', message => {
    // console.log(message.author.bot);
    async function query() {
        const name = message.author.username;
        const anotherid = message.author.avatar;
        const authorbot = message.author.bot;
        const nameserver = message.guild.name;
        const content = message.content;
        const verificationLevel = message.guild.verificationLevel;
        const time = new Date();
        await con.query("INSERT INTO `discord-logs` (`id`, `avatar_username`, `avatar_id`, `avatar_bot_type`, `avatar_content`, `avatar_content_time`, `server_nameserver`, `server_verificationLevel`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)",[name,anotherid,authorbot,content,time,nameserver,verificationLevel], function (err, result) {
            if (err) throw err;
            console.log(`1 record inserted by ${message.author.username}`);
        });
    }
    query();

    if(message.content === `${config.prefix}r`){
        const avatar = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`;
            function random_item(items){
                return items[Math.floor(Math.random()*items.length)];
            }
        const ArratOne = ["1","2","3","4","5","6","7","8","9"];
        const ArratTwo = ["1","2","3","4","5","6","7","8","9"];
        let x = menu.find((a) => a.tags.includes("hololive"));
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
                            name: 'Regular field title',
                            value: `${x.tags}`
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        }
                    ],
                
                    image: {
                        url: `${x.jpeg_url}`,
                    },
                    timestamp: new Date(),
                    footer: {
                        text:"Contribute @ github: https://github.com/puemmth",
                        iconURL: `${avatar}`
                    }
               }
           ]
        });
    }

    if(message.content === `${config.prefix}p`){
        const avatar = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`;
        function random_item(items){
            return items[Math.floor(Math.random()*items.length)];
        }
        const ArratOne = ["1","2","3","4","5","6","7","8","9"];
        const ArratTwo = ["1","2","3","4","5","6","7","8","9"];
        console.log(random_item(ArratOne));
        message.reply({
           embeds: [
               {
                    title: "อาร์เรย์แบบสุ่ม",
                    color: "GREEN",
                    fields: {
                        name: "Math",
                        value: `${random_item(ArratOne)} || ${random_item(ArratTwo)}`
                    },
                    footer: {
                        text:"Contribute @ github: https://github.com/puemmth",
                        iconURL: `${avatar}`
                    }
               }
           ]
        });
    }
});

client.login(config.token);