const Discord = require('discord.js');
const client = new Discord.Client();
const COLOR = process.env.COLOR;

    
module.exports = {
    name: "unban",
    description: "bans a member from the server",
    
    execute(message, args){

const banhelp = new Discord.MessageEmbed()
.setTitle('Unban Help')
.setColor(COLOR)
.setDescription('unban a player from the discord server!')
.addFields(
    { name: 'Usage', value: '`!unban <User_tagged> <Reason>`', inline: true },
    { name: 'Permission Needed', value: '`BAN_MEMBERS`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const banpermission = new Discord.MessageEmbed()
.setTitle('Unban Error')
.setColor(COLOR)
.setDescription('You don\'t have the required permission to perform this command!')
.addFields(
    { name: 'Permission Needed', value: '`BAN_MEMBERS`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const banpermission2 = new Discord.MessageEmbed()
.setTitle('Permission Error')
.setColor(COLOR)
.setDescription('I don\'t have permission to perform that action',)
.addFields(
    { name: 'Permission Needed', value: '`BAN_MEMBERS`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const errorfinding = new Discord.MessageEmbed()
.setTitle('Error Finding Member')
.setColor(COLOR)
.setDescription('Can\'t seem to find this user. Sorry \'bout that :/')
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const permissionerror = new Discord.MessageEmbed()
.setTitle('Permission Error')
.setColor(COLOR)
.setDescription('This user can\'t be unbanned. It is either because they are a mod/admin, or their highest role is higher than mine')
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const banyou = new Discord.MessageEmbed()
.setTitle('Bruh, You Can\'t, ban yourself!')
.setColor(COLOR)
.setDescription('Bro! Nice Try But you Can\'t Do that LOSER')
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())


            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(banpermission)
            if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(banpermission2)

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            if(!args[0]) return message.channel.send(banhelp);

            if(!member) return message.channel.send(errorfinding);
            if(!member.bannable) return message.channel.send(permissionerror);

            if(member.id === message.author.id) return message.channel.send(banyou);

            let reason = args.slice(1).join(" ");

            if(reason === undefined) reason = 'Unspecified';

            member.unban({reason: reason })
            .catch(err => {
                console.error(err)
                
            })
            const banembed = new Discord.MessageEmbed()
        .setTitle('Member unbanned')
        .setColor(COLOR)
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User unbanned', member)
        .addField('unbanned by', message.author)
        .addField('Reason', reason)
        .setTimestamp()
        .setFooter(message.author.username,message.author.avatarURL())

        message.channel.send(banembed)

           

        }
    }