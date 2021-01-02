const db = require("quick.db")
const discord = require("discord.js")
const COLOR = process.env.COLOR;

module.exports = {
  name: "warnings",
  description: "Get the warnings of yours or mentioned person",
  category: "moderation",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    const warncount = new discord.MessageEmbed()
        .setTitle(`Warning Count`)
        .setColor(COLOR)
        .setDescription([
        `${user} have **${warnings}** warning(s) \n`,
        ].join('\n'))
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())
    
    message.channel.send(warncount)
  
  
  }
}