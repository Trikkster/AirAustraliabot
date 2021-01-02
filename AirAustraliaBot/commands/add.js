const Discord = require('discord.js')
const COLOR = process.env.COLOR;

 module.exports = {
    name: "ticket",
    description: "announces somethin",
    run: async (client, message, args) => {
        message.react('✅')
        const reply = new Discord.MessageEmbed()
        .setAuthor(`Sucessfully Added ${message.mentions.members.first().name}`, client.user.avatarURL())
        .setColor(COLOR)
        message.channel.send(reply)


                message.channel.updateOverwrite(message.mentions.members.first().id, { VIEW_CHANNEL: true });
            



    }
}