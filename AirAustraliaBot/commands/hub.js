const Discord = require('discord.js')
const COLOR = process.env.COLOR;
const db = require('quick.db')
 module.exports = {
    name: "hub",
    description: "announces somethin",
    run: async (client, message, args) => {
        const hi = db.get(`hublink_${message.guild.id}`)

if(hi === null)return message.channel.send('No Hub Link Set')

message.channel.send(hi)
    }
}