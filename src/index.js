const { Client, Intents, MessageEmbed } = require('discord.js');
const { MYSQL_HOSTNAME, MYSQL_USERNAME, MYSQL_POSSWORD, MYSQL_DATABASE, BOT_TOKEN} = process.env; 
require('dotenv').config(); // Load .env file
var mysql = require('mysql');

const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ]
});

const config = require('./data/config.json');
// const menu = require('./data/menu.json');
// let x = menu.find((a) => a.tags.includes("hololive"));
const helpMessage = require('./commands/help-message');
const rand = require('./commands/random');
const database = require('./commands/database');
const serverconnect = require('./commands/server-connect');

client.on('ready',() => {
    console.log(`Ready! ${client.user.tag}!`);

    // register const commands
    helpMessage(client,`${config.prefix}help`);
    rand(client,`${config.prefix}ran`);
    database(client,`${config.prefix}db`);
    serverconnect(client,`${config.prefix}ls-connect`);
});

// mysql connecction 
var con = mysql.createConnection({
    host: MYSQL_HOSTNAME,
    user: MYSQL_USERNAME,
    password: MYSQL_POSSWORD,
    database: MYSQL_DATABASE
});

// check connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

// client.on('messageCreate', message => {

// });

client.login(BOT_TOKEN);

