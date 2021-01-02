const Discord = require('discord.js')
const COLOR = process.env.COLOR;
const db = require('quick.db')
 module.exports = {
    name: "hublink",
    description: "announces somethin",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t run that command')
        let reason = args.slice(0).join(" ");
        const hi = db.set(`hublink_${message.guild.id}`, reason)


message.channel.send('Set Link!')
    }
}