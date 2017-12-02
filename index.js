const Discord = require("discord.js");

const PREFIX = "=";

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

client.on("message", function(message) {
    var sender = message.author;
    var msg = message.content.toUpperCase();
    if (sender.id == '386597563379351563'){
      return;
    }
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "ping":
            message.channel.send("Pong!");
            break;
        case "help":
            message.channel.send("Szia! Elérhető parancsok:\n- =help\n- =ping");
            break;
        default:
            message.channel.send("Ez a parancs nem létezik!");
                        
    }    
  
});

client.login(process.env.BOT_TOKEN);       
