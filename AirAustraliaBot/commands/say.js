const Discord = require('discord.js')
const COLOR = process.env.COLOR;

 module.exports = {
    name: "say",
    description: "announces somethin",
    run: async (client, message, args) => {
        const error2 = new Discord.MessageEmbed()
        .setTitle('Sorry you can\'t run that command')
        .setColor(COLOR)
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(error2)

        let reason = args.slice(0).join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(reason)
    }
}