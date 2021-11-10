# discord-private

```
 .env file inside
    MYSQL_HOSTNAME=[hostname]
    MYSQL_USERNAME=[username]
    MYSQL_POSSWORD=[password]
    MYSQL_DATABASE=[database]
    BOT_TOKEN=[tokenbot]
```

# Simple script

```Javascript
const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready',() => {
    console.log(`Ready! ${client.user.tag}!`);
});

client.on('messageCreate', message => {
   message.reply("Text Reply");
});

client.login(BOT_TOKEN);
```
