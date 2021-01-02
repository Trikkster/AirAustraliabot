const Discord = require('discord.js');
const client = new Discord.Client();


const noblox = require('noblox.js');

const prefix2 = "!";

require('dotenv').config();


const prefix = "!";
 
const fs = require('fs');
const fetch = require('node-fetch')





var queue = new Map();
 
client.commands = new Discord.Collection();
 
client.on('ready', activity => {
    setInterval( async() => {
        client.user.setActivity(
            `${process.env.STATUS}`,
            { type: `LISTENING` }
        )
             // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
    
});





const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}



 
 
client.once('ready', () => {
    console.log('Bot is Online');
});

 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').run(client, message, args);   
    } else if (command == 'purge'){
        client.commands.get('purge').run(client, message, args);   
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mute'){
        client.commands.get('mute').run(client, message, args);
    }   else if (command == 'warn'){
        client.commands.get('warn').run(client, message, args)
    }   else if (command == 'warnings'){
        client.commands.get('warnings').run(client, message, args)
    }   else if (command == 'clearwarnings'){
        client.commands.get('clearwarnings').run(client, message, args)
    }   else if (command == 'verify'){
        client.commands.get('verify').run(client, message, args);
    }   else if (command == 'verifyrole'){
        client.commands.get('verifyrole').run(client, message, args);
    }   else if (command == 'help'){
        client.commands.get('help').run(client, message, args);
    }   else if (command == 'update'){
        client.commands.get('update').run(client, message, args);
    }   else if (command == 'sync'){
        client.commands.get('sync').run(client, message, args);
    }   else if (command == 'muterole'){
        client.commands.get('muterole').run(client, message, args)
    }   else if (command == 'unmute'){
        client.commands.get('unmute').run(client, message, args)
    }   else if (command == 'unban'){
        client.commands.get('unban').execute(message, args)
    }   else if (command == 'profile'){
        client.commands.get('profile').run(client, message, args)
    }   else if (command == 'announce'){
        client.commands.get('announce').run(client, message, args)
    }   else if (command == 'suggest'){
        client.commands.get('suggest').run(client, message, args)
    }   else if (command == '8ball'){
        client.commands.get('8ball').run(client, message, args)
    }   else if (command == 'giveaway'){
        client.commands.get('giveaway').run(client, message, args)
    }   else if (command == 'membercount'){
        client.commands.get('membercount').run(client, message ,args)
    } else if(command == 'botinfo'){
        client.commands.get('botinfo').run(client, message, args)
    }else if(command == 'ticket'){
        client.commands.get('ticket').run(client, message, args)
    }else if(command == 'rename'){
        client.commands.get('rename').run(client, message, args)
    }else if(command == 'close'){
        client.commands.get('close').run(client, message, args)
    }else if(command == 'add'){
        client.commands.get('add').run(client, message, args)
    }else if(command == 'banner'){
        client.commands.get('banner').run(client, message, args)
    }else if(command == 'profilepicture'){
        client.commands.get('profilepicture').run(client, message, args)
    }else if(command == 'hub'){
        client.commands.get('hub').run(client, message, args)
    }else if(command == 'hublink'){
        client.commands.get('hublink').run(client, message, args)
    }
//ok
    
    
});

client.login(process.env.TOKEN);

      
