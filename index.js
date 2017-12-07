const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const PREFIX = "imp ";

var client = new Discord.Client();
var servers = {};

function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("on play.implicite.us");
  client.user.setUsername("ImpliciteBot");
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'bot-log');
    if (!channel) return;
    channel.send(`${member} csatlakozott a szerverhez!`);
  });
client.on("message", message => {
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let cont = message.content.slice(PREFIX.length).split(" ");
    let args = cont.slice(1);
    let args1 = message.content.substring(PREFIX.length).split(" ");

    if (message.author.equals(client.user)) return;
    
    if (msg.startsWith(PREFIX + 'purge')) { 
        async function purge() {
            message.delete(); 

            
            if (!message.member.roles.find("name", "Bot-Access")) {
                message.channel.send(`${sender}, ehhez \Bot-Access\ role kell!`);
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send(`${sender}, kérlek adj meg értéket!. \nHasználat: ` + PREFIX + `purge <érték>`);
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            sender.send(fetched.size + ' üzenetet találtam, már is törlöm...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Hiba: ${error}`));

        }

        purge(); 

    }
    if (msg.startsWith(PREFIX + 'play')) {
        if (!message.member.roles.find("name", "Bot-Access")) {
            message.channel.send(`${sender}, ehhez \Bot-Access\ role kell!`);
            return;
        }
        if (!args1[0]){
            message.channel.send(`${sender}, kérlek adj meg egy linket!`);
            return;
        }
        if (!message.member.voiceChannel){
            message.channel.send(`Nem egy szobában vagy!`);
        }
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };

        var server = servers[message.guild.id];
        server.queue.push(args1[1]);

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection){
                //server.dispatcher = connection.playStream(YTDL(args1[1], {filter: "audioonly"}));
                //message.channel.send("Muzsika: " + args1[1]);

            play(connection, message);
        });
    }
    if (msg.startsWith(PREFIX + 'skip')){
        var server = servers[message.guild.id];
        if (server.dispatcher) server.dispatcher.end();
    }
    if (msg.startsWith(PREFIX + 'stop')){
        var server = servers[message.guild.id];
        if (!message.member.roles.find("name", "Bot-Access")) {
            message.channel.send(`${sender}, ehhez \Bot-Access\ role kell!`);
            return;
        } 
        if (message.guild.voiceConnection)
        {
            for (var i = server.queue.length - 1; i >= 0; i--) 
            {
                server.queue.splice(i, 1);
         }
            server.dispatcher.end();
            console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
            message.guild.voiceConnection.disconnect();
            message.channel.send("Sikeresen leállítottad a zenét!");
        }

    }
    if (msg.startsWith(PREFIX + 'készítőd')){
        message.channel.send("Engem Rapp3rX készített!");
    }
    if (msg.startsWith(PREFIX + 'szerver')){
        message.channel.send("Hamarosan...");
    }
    if (msg.startsWith(PREFIX + 'info')){
        message.channel.send("Hamarosan...");
    }
    if (msg.startsWith(PREFIX + 'parancsok')){
        message.channel.send("Üdvözöllek!\nPrefix: "+ PREFIX + "\nElérhető parancsok tőlem:\n- készítőd(Ki készített)\n- szerver(A szerverről)\n- parancsok(Parancs lista)");
    }

    if (msg.includes('anyád') || msg.includes('geci') || msg.includes('büdös') || msg.includes('kurva') || msg.includes('meleg') || msg.includes('fasz') || msg.includes('köcsög') || msg.includes('buzi') || msg.includes('fuck') || msg.includes('homár') || msg.includes('4ny4d')  || msg.includes('homo')  || msg.includes('cigány')){
        message.delete();
        message.channel.send(`Töröltem ${sender} üzenetét! Indok: Káromkodás`);      
    }
    /*else if (msg.includes("http://") || msg.includes("https://") ){
        if (message.channel.id == '386610409563619328'){
            console.log('Itt hírdettek, de nem tötént semmi.')
        } else {
            message.delete();
            message.channel.send(`Töröltem ${sender} üzenetét! Indok: Link`); 
        }

    }*/
    else if (msg.includes('csá') || msg.includes('szia') || msg.includes('cső') || msg.includes('szevasz')){
        message.channel.send(`Szia, ${sender}!`);      
    }
    else if (msg.includes('tgf') || msg.includes('tagfelvétel')){
        message.channel.send(`${sender}, jelenleg nincs tagfelvétel! Ha lesz, azt kihírdetjük a Facebook oldalunkon, vagy a szerveren!`);      
    }
    else if (msg.includes('implicitebot')){
        message.channel.send(`Igen, én vagyok! Esetleg szeretnél tőlem valamit ${sender}? Mert akkor: pls parancsok`);      
    }


});
client.login(process.env.BOT_TOKEN);       
