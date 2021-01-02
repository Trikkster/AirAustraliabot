const Discord = require('discord.js')
const COLOR = process.env.COLOR;
const cat = process.env.TICKETCATEGORY;
 module.exports = {
    name: "ticket",
    description: "announces somethin",
    run: async (client, message, args) => {
        message.react('✅')
        const reply = new Discord.MessageEmbed()
        .setAuthor(`Ticket Created!`, client.user.avatarURL())
        .setColor(COLOR)
        message.channel.send(reply)
const name = message.author.id
        message.guild.channels
            .create(name, {
                type: 'text',
            })
            .then((channel) => {
                const categoryId = cat
                channel.setParent(categoryId)
    
                const testing = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);

                channel.setName(`Ticket-` + testing)
                channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
                channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
                channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
                channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
                channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
                channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
                channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
                channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
                channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
                const final = new Discord.MessageEmbed()
.setTitle(`New Ticket for ${message.author.username}`)
.setDescription(`A Staff Member will be with you shortly!`)
.setThumbnail(message.author.avatarURL())
.setColor(COLOR)
.setFooter(`${message.guild.name}`, client.user.avatarURL())
channel.send(`@here`)
channel.send(final)
            })



    }
}