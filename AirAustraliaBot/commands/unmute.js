const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const db = require('quick.db')
const COLOR = process.env.COLOR;

module.exports = {
  name: "unmute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {


    const mutepermission2 = new Discord.MessageEmbed()
      .setTitle('Permission Error')
      .setColor(COLOR)
      .setDescription('I don\'t have permission to perform that action',)
      .addFields(
        { name: 'Permission Needed', value: '`MANAGE_ROLES`' },
      )
      .setTimestamp()
      .setFooter(message.author.username,message.author.avatarURL())

      const mutepermission1 = new Discord.MessageEmbed()
      .setTitle('Permission Error')
      .setColor(COLOR)
      .setDescription('You don\'t have permission to perform that action',)
      .addFields(
        { name: 'Permission Needed', value: '`MANAGE_ROLES`' },
      )
      .setTimestamp()
      .setFooter(message.author.username,message.author.avatarURL())
      
      const mutehelp = new Discord.MessageEmbed()
.setTitle('UnMute Help')
.setColor(COLOR)
.setDescription('UnMute a player in the discord server!')
.addFields(
    { name: 'Usage', value: '`!unmute <User_tagged> <Reason>`', inline: true },
    { name: 'Permission Needed', value: '`MANAGE_ROLES`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())



const muteerror250 = new Discord.MessageEmbed()
.setTitle('UnMute Error 250')
.setColor(COLOR)
.setDescription('You have\'t setup the mute role yet')
.addFields(
    { name: 'How to setup mute role', value: '`!muterole <Role_tagged>`', inline: true },
    { name: 'Error Code', value: '`250`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);



    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(mutepermission1);
    }
   

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(mutepermission2);
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send(mutehelp)
    }
    
    
    
    

    
    let muterole = db.get(`muterole_${message.guild.id}`)
    
    
      if(!muterole) {
      return message.channel.send(muteerror250)
    }
    

    
  
    

    user.roles.remove(muterole)

    const banembed = new Discord.MessageEmbed()
    .setTitle('Member Unmuted')
    .setColor(COLOR)
    .addField('User UnMuted', `${message.mentions.users.first().username}`)
    .addField('UnMuted by', message.author)
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())

    const banembe2d = new Discord.MessageEmbed()
    .setTitle('Muted')
    .setColor(COLOR)
    .setDescription(`You were unmuted in **${message.guild.name}**`)
    .addField('User UnMuted', `${message.mentions.users.first().username}`)
    .addField('UnMuted by', message.author)
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())
    
await message.channel.send(banembed)
    
    user.send(banembe2d)
    
    
 
    
  }
};