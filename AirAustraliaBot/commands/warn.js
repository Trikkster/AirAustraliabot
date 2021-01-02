const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require('discord.js');
const COLOR = process.env.COLOR;

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    const warnerror = new Discord.MessageEmbed()
    .setTitle('Warning Error')
    .setColor(COLOR)
    .setDescription([
    'You don\'t have the required permission to perform this command!\n',
    '**Permission Needed:** ADMIN',
    ].join('\n'))
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())

    const warnhelp = new Discord.MessageEmbed()
    .setTitle('Warning Help')
    .setColor(COLOR)
    .setDescription([
    'Warn a player in this Discord Server!\n',
    '**Usage:** !warn <user> <reason>',
    '**Permission Needed:** ADMIN',
    ].join('\n'))
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())

    const warnbot = new Discord.MessageEmbed()
    .setTitle('Warning Error')
    .setColor(COLOR)
    .setDescription([
    'Error You Can\'t warn that person \n',
    ].join('\n'))
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(warnerror)
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send(warnhelp)
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send(warnbot)
    }
    
    if(message.author.id === user.id) {
      return message.channel.send(warnbot)
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send(warnbot)
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send(warnhelp)
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    const warnmax = new Discord.MessageEmbed()
    .setTitle('Warning Error')
    .setColor(COLOR)
    .setDescription(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())

    const warnDM1 = new Discord.MessageEmbed()
    .setTitle('You Have Been Warned')
    .setColor(COLOR)
    .setDescription(`You have been warned in **${message.guild.name}** for ${reason}`)
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())
    
    const warnchanel1 = new Discord.MessageEmbed()
    .setTitle('New Warning')
    .setColor(COLOR)
    .setDescription(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())

    if(warnings === 3) {
      return message.channel.send(warnmax)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(warnDM1)
      await message.channel.send(warnchanel1)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(warnDM1)
      await message.channel.send(warnchanel1)
    }
    
  
  } 
}