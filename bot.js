const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612368476845375497")
setInterval(function() {
channel.send(`الحمد الله ياربي الحمد الله `);
}, 30)
})

client.login(process.env.BOT_TOKEN);