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
    
    
    /*if (msg.startsWith(PREFIX + 'szerver')){
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Hiba lépett fel...');
            }
            body = JSON.parse(body);
            var status = '*A szerver jelenleg nem elérhető!*';
            if(body.online) {
                status = '**Minecraft** szerver **elérhető**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** játékos van fent!';
                } else {
                    status += '*Senki sincs fent!*';
                }
            }
            message.reply(status);
        });
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
    }*/
    /*else if (msg.includes("http://") || msg.includes("https://") ){
        if (message.channel.id == '386610409563619328'){
            console.log('Itt hírdettek, de nem tötént semmi.')
        } else {
            message.delete();
            message.channel.send(`Töröltem ${sender} üzenetét! Indok: Link`); 
        }

    }*/
    if (msg.startsWith('-new') && msg.channel.id === '481138002064834589') {
         message.delete();
    }


});
client.login(process.env.BOT_TOKEN);       
