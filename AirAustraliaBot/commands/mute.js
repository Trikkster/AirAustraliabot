const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const db = require('quick.db')

const COLOR = process.env.COLOR;

module.exports = {
  name: "mute",
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
.setTitle('Mute Help')
.setColor(COLOR)
.setDescription('Mute a player in the discord server!')
.addFields(
    { name: 'Usage', value: '`!mute <User_tagged> <Reason>`', inline: true },
    { name: 'Permission Needed', value: '`MANAGE_ROLES`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const muteerror201 = new Discord.MessageEmbed()
.setTitle('Mute Error 201')
.setColor(COLOR)
.setDescription('Please Give the reason to mute the member')
.addFields(
    { name: 'Usage', value: '`!mute <User_tagged> <Reason>`', inline: true },
    { name: 'Error Code', value: '`201`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const muteerror250 = new Discord.MessageEmbed()
.setTitle('Mute Error 250')
.setColor(COLOR)
.setDescription('You have\'t setup the mute role yet')
.addFields(
    { name: 'How to setup mute role', value: '`!muterole <Role_tagged>`', inline: true },
    { name: 'Error Code', value: '`250`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const muteerror242 = new Discord.MessageEmbed()
.setTitle('Mute Error 242')
.setColor(COLOR)
.setDescription(`${message.mentions.users.first().username} is already muted`)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(mutepermission1);
    }
   

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(mutepermission2);
    }

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    if(!user) {
      return message.channel.send(mutehelp)
    }
    
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send(muteerror201)
    }
    

    
    let muterole = db.get(`muterole_${message.guild.id}`)
    
    
      if(!muterole) {
      return message.channel.send(muteerror250)
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send(muteerror242)
    }
    
  
    

    user.roles.add(muterole)

    const banembed = new Discord.MessageEmbed()
    .setTitle('Member Muted')
    .setColor(COLOR)
    .setThumbnail(message.mentions.users.first().avatarURL)
    .addField('User Muted', `${message.mentions.users.first().username}`)
    .addField('Muted by', message.author)
    .addField('Reason', reason)
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())

    const banembe2d = new Discord.MessageEmbed()
    .setTitle('Muted')
    .setColor(COLOR)
    .setDescription(`You are muted in **${message.guild.name}**`)
    .setThumbnail(message.mentions.users.first().avatarURL)
    .addField('User Muted', `${message.mentions.users.first().username}`)
    .addField('Muted by', message.author)
    .addField('Reason', reason)
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())
    
await message.channel.send(banembed)
    
    user.send(banembe2d)
    
    
 
    
  }
};