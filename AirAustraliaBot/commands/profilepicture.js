const Discord = require('discord.js')
const COLOR = process.env.COLOR;

 module.exports = {
    name: "profilepicture",
    description: "announces somethin",
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const test = new Discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setColor(COLOR)
        message.channel.send(test)
    }
}