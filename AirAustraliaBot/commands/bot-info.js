const { MessageEmbed } = require('discord.js')
const os = require('os')
var osu = require('node-os-utils')
const hi = require('os-utils')
module.exports = {
    name: "bot-info",
    description: "verifies an user with RoVer API",
    run: async (client, message, args) => {
        let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);



const cpu2 = hi.cpuUsage(function(v){
    console.log('CPU Usage (%): ' + v );
});

        const embed = new MessageEmbed()

        
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Serving ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `OS: ${os.platform()}`,
                    inline: true
                },
                {
                    name: 'Server Uptime',
                    value: `Uptime: ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`,
                    inline: true
                },
                
               
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}