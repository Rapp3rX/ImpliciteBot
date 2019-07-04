const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const PREFIX = "imp ";

var client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("on play.implicite.hu");
  client.user.setUsername("ImpliciteBot");
});

client.on("message", message => {
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let cont = message.content.slice(PREFIX.length).split(" ");
    let args = cont.slice(1);
    let args1 = message.content.substring(PREFIX.length).split(" ");

    if (message.author.equals(client.user)) return;
    
    if (msg.startsWith("-new")) {
      if (message.channel.id === '481138002064834589'){
        message.delete();
      } 
    }


});
client.login(process.env.BOT_TOKEN);       
