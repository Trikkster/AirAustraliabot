const Discord = require('discord.js');
const client = new Discord.Client();

const COLOR = process.env.COLOR;


module.exports = {
    name: "kick",
    description: "Kicks a member from the server",
    execute(message, args){

const kickhelp = new Discord.MessageEmbed()
.setTitle('Kick Help')
.setDescription('Kick a player from the discord server!')
.setColor(COLOR)
.addFields(
    { name: 'Usage', value: '`!kick <User_tagged> <Reason>`', inline: true },
    { name: 'Permission Needed', value: '`KICK_MEMBERS`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const kickpermission = new Discord.MessageEmbed()
.setTitle('Kick Error')
.setColor(COLOR)
.setDescription('You don\'t have the required permission to perform this command!')
.addFields(
    { name: 'Permission Needed', value: '`KICK_MEMBERS`' },
)
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const kickpermission2 = new Discord.MessageEmbed()
.setTitle('Permission Error')
.setColor(COLOR)
.setDescription('I don\'t have permission to perform that action',)
.addFields(
    { name: 'Permission Needed', value: '`KICK_MEMBERS`' },
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
.setDescription('This user can\'t be kicked. It is either because they are a mod/admin, or their highest role is higher than mine')
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())

const kickyou = new Discord.MessageEmbed()
.setTitle('Bruh, You Can\'t, kick yourself!')
.setColor(COLOR)
.setDescription('Bro! Nice Try But you Can\'t Do that LOSER')
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL())


            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(kickpermission)
            if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(kickpermission2)

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            if(!args[0]) return message.channel.send(kickhelp);

            if(!member) return message.channel.send(errorfinding);
            if(!member.kickable) return message.channel.send(permissionerror);

            if(member.id === message.author.id) return message.channel.send(kickyou);

            let reason = args.slice(1).join(" ");

            if(reason === undefined) reason = 'Unspecified';

            member.kick(reason)
            .catch(err => {
                if(err) return message.channel.send('Something went wrong')
            })
            const kickembed = new Discord.MessageEmbed()
        .setTitle('Member Kicked')
        .setColor(COLOR)
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter(message.author.username,message.author.avatarURL())
        .setTimestamp()

        message.channel.send(kickembed)

           

        }
    }