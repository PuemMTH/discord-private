module.exports = (client, triggerText) => {
    client.on('messageCreate', (message) => {
        if(message.content.toLowerCase() === triggerText.toLowerCase()){
            async function query() {
                const name = message.author.username;
                const anotherid = message.author.avatar;
                const authorbot = message.author.bot;
                const nameserver = message.guild.name;
                const content = message.content;
                const verificationLevel = message.guild.verificationLevel;
                const time = new Date();
                con.query("INSERT INTO `discord-logs` (`id`, `avatar_username`, `avatar_id`, `avatar_bot_type`, `avatar_content`, `avatar_content_time`, `server_nameserver`, `server_verificationLevel`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)",[name,anotherid,authorbot,content,time,nameserver,verificationLevel], await function (err, result) {
                    if (err) throw err;
                    console.log(`1 record inserted by ${message.author.username}`);
                });
            }
            query();
        }
    });
}

