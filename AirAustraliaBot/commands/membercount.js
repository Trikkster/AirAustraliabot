const Discord = require('discord.js');
const client = new Discord.Client();
const COLOR = process.env.COLOR;


const {MessageEmbed} = require('discord.js');
module.exports = {
    name: "membercount",
    description: "Mute anyone who break rules",
    category: "moderation",
    usage: "mute <@mention> <reason>",
    run: async (client, message, args) => {
        const test = new MessageEmbed ()
        .setColor(COLOR)
        .setTitle(`${message.guild.name} Member Count`)
        .setDescription(`${message.guild.memberCount}`)
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())

    message.channel.send(test)
    }
}