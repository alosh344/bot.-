const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NjE2NzE0MjIxNDUwNjkwNTY5.XosORg.FRYMR0ho_fmYUnP8Bzfb7swyqJg"); 

client.on('message', message => {
    if(message.content === 'هلو'){
        message.channel.send('الرد')
    }
});
