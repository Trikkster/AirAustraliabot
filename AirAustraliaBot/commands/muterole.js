const db = require('quick.db')
const COLOR = process.env.COLOR;
const Discord = require('discord.js')
module.exports = {
  name: "muterole",
  description: "verifies an user with RoVer API",
  run: async (client, message, args) => {

    const banpermission = new Discord.MessageEmbed()
.setTitle('Mute Error')
.setColor(COLOR)
.setDescription('You don\'t have the required permission to perform this command!')
.addFields(
    { name: 'Permission Needed', value: '`MANAGE_ROLES`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const banpermission2 = new Discord.MessageEmbed()
.setTitle('Mute Error')
.setColor(COLOR)
.setDescription('You don\'t have the required permission to perform this command!')
.addFields(
    { name: 'Permission Needed', value: '`MANAGE_ROLES`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(banpermission)
    if(!message.guild.me.hasPermission("MANGE_ROLES")) return message.channel.send(banpermission2)

  
    const verifiedrole = message.mentions.roles.first()
    if(!verifiedrole) {
      const embednorole = new Discord.MessageEmbed()
      .setTitle('Something went wrong...')
      .setColor(COLOR)
      .setDescription('You did not mentioned a role.')
      .setColor(COLOR)
      return message.channel.send(embednorole)
    } else {
      db.delete(`muterole_${message.guild.id}`)
      db.set(`muterole_${message.guild.id}`, verifiedrole.id)
    const verifiedrolecheck = db.get(`muterole_${message.guild.id}`)
    const donedaddy = new Discord.MessageEmbed()
    .setTitle('Done!')
    .setColor(COLOR)
    .setDescription(`Mute role has been set as: <@&${verifiedrolecheck}>`)
    message.channel.send(donedaddy);
    }
  }
}