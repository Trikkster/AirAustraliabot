const Discord = require('discord.js')
const COLOR = process.env.COLOR;

 module.exports = {
    name: "say",
    description: "announces somethin",
    run: async (client, message, args) => {
        const error2 = new Discord.MessageEmbed()
        .setTitle('Help.')
        .setDescription(`**Moderation**\n **!kick** - Kicks a user\n **!ban** - Bans a user\n **!mute** - Mutes a user\n **!unmute** - Unmutes a user\n **!muterole** - Sets the mute role\n **!warn** - Warns a user\n **!clearwarnings** - Clears warnings\n **!announce** - Announces something using a embed\n **!giveaway** - Giveaways a item (Update Coming Soon)\n\n **Roblox Commands**\n **!verifyrole** - Sets the verify role\n **!verify** - Verifies using RoVer\n **!update** - Admins update a user\n **!sync** - Sync server with RASB Blacklist\n\n **Serverwide**\n **!suggest** - Sends a suggestion\n **!8ball** - Ask the genie\n **!membercount** - Gets the server membercount\n **!profilepicture** - Gets a users profile picture\n\n **Bot Help**\n **!help** - Get bot help\n **!botinfo** - Gets uptime and such\n `)
        .setColor(COLOR)

        message.channel.send(error2)
    }
}