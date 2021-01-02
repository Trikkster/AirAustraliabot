const Discord = require('discord.js')
const COLOR = process.env.COLOR;

 module.exports = {
    name: "rename",
    description: "announces somethin",
    run: async (client, message, args) => {
        const banpermission = new Discord.MessageEmbed()
        .setTitle('Error you don\'t have permission to run this command')
        .setColor(COLOR)
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(banpermission)
        let reason = args.slice(0).join(" ");
        message.channel.setName(reason)

    }
}