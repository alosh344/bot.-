const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if(message.content === 'هلو'){
        message.channel.send('الرد')
    }
});
