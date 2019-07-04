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
    /*if (message.guild === null) return;*/
    if (!message.member.roles.find('id', '336252194057879552')) {
    if (message.channel.id === '596418935197532170'){
        message.delete();
        if(!msg.startsWith('-new')){
           sender.send("Kérlek ne írj feleslegesen a Report szobába, ha kell segítség, használd a -new <probléma> parancsot abba a szobába!");
           }
      }
    if (message.channel.id === '577098686472126464'){
        if(!msg.startsWith('!key')){
           message.delete();
           sender.send("Kérlek ne beszélgess feleslegesen ebbe a szobába!");
           }
      }
    }


});
client.login(process.env.BOT_TOKEN);       
