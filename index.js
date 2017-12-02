const Discord = require("discord.js");

const PREFIX = "pls ";

var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("on play.implicite.us");
  client.user.setUsername("ImpliciteBot");
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'bot-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`${member} csatlakozott a szerverhez!`);
  });

  client.on('guildMemberRemove', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'bot-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`${member} elhagyta a szervert!`);
  });
client.on("message", async message => {
    var sender = message.author;
    var msg = message.content.toLowerCase();
    if (sender.id == '386597563379351563'){
      return;
    }    
    if (message.author.equals(client.user)) return;
    
    if (msg.includes('implicitebot')){
        message.channel.send(`Igen, én vagyok! Esetleg szeretnél tőlem valamit ${sender}?`);      
    }
    if (msg.includes('tgf') || msg.includes('tagfelvétel')){
        message.channel.send(`${sender}, jelenleg nincs tagfelvétel! Ha lesz, azt kihírdetjük a Facebook oldalunkon, vagy a szerveren!`);      
    }
    if (msg.includes('csá') || msg.includes('szia') || msg.includes('cső') || msg.includes('szevasz')){
        message.channel.send(`Szia, ${sender}!`);      
    }
    if (msg.includes('anyád') || msg.includes('geci') || msg.includes('büdös') || msg.includes('kurva') || msg.includes('meleg') || msg.includes('fasz') || msg.includes('köcsög') || msg.includes('buzi') || msg.includes('fuck') || msg.includes('homár') ){
        message.delete();
        message.channel.send(`Töröltem ${sender} üzenetét! Indok: Káromkodás`);      
    }
});
client.on("message", function(message) {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "készítőd":
            message.channel.send("Engem Rapp3rX készített!");
            break;
        case "szerver":
            message.channel.send("Legjobb szerver! (Legalább is belém írták :P)");
            break;
        case "parancsok":
           message.channel.send("Elérhető parancsok tőlem: készítőd, szerver, parancsok");
           break;
        default:
            message.channel.send("Nem tudod mit akarsz? Akkor kérdezd meg tőlem a parancsokat!");
                        
    }
  
});

client.login(process.env.BOT_TOKEN);       
