const discord = require('discord.js');
const COLOR = process.env.COLOR;

module.exports = {
    name: "purge",
    description: "Clears messages",

    async run (client, message, args) {

        const kickyou = new discord.MessageEmbed()
        .setTitle('Purge Help')
        .setColor(COLOR)
        .setDescription('Purge up to 100 Messages at a time')
        .addFields(
            { name: 'Usage', value: '`!purge <Message_Count>`', inline: true },
            { name: 'Permission Needed', value: '`MANAGE_MESSAGE`' },
        )
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())

        const kickpermission = new discord.MessageEmbed()
        .setTitle('Purge Error')
        .setColor(COLOR)
        .setDescription('You don\'t have the required permission to perform this command')
        .addFields(
            { name: 'Permission Needed', value: '`MANAGE_MESSAGE`' },
        )
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())

        const kickpermission2 = new discord.MessageEmbed()
        .setTitle('Permission Error')
        .setColor(COLOR)
        .setDescription('I don\'t have permission to perform that action')
        .addFields(
            { name: 'Permission Needed', value: '`MANAGE_MESSAGE`' },
        )
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())

        const error100 = new discord.MessageEmbed()
        .setTitle('Purge Error')
        .setColor(COLOR)
        .setDescription('You cannot clear more then 100 messages at once')
        .addFields(
            { name: 'Purge Amount', value: '`Purge 0-99 Messages`' },
            { name: 'Error Code', value: '`Error100`' },
        )
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())

        const error0 = new discord.MessageEmbed()
        .setTitle('Purge Error')
        .setColor(COLOR)
        .setDescription('You need to delete at least one message')
        .addFields(
            { name: 'Purge Amount', value: '`Purge 0-99 Messages`' },
            { name: 'Error Code', value: '`Error1`' },
        )
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())


        const amount = args.join(" ");

        const sucess = new discord.MessageEmbed()
        .setTitle('Purge Success')
        .setColor(COLOR)
        .setDescription(`You have successfully purged ${amount} Messages`)
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(kickpermission)
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(kickpermission2)

        if(!amount) return message.channel.send(kickyou)

        if(amount > 100) return message.channel.send(error100)

        if(amount < 1) return message.channel.send(error0)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(sucess)

    }

}