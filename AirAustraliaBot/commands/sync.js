const got = require("got");

const Discord = require("discord.js")
const discord = require("discord.js")
const db  = require('quick.db')
const COLOR = process.env.COLOR;


    module.exports = {
        name: "sync",
        description: "Kicks a member from the server",
        run: async (client, message, args) => {
            const disabled = new Discord.MessageEmbed()
            .setTitle('❌ Roblox Commands are disabled')
            .setColor(COLOR)
            .setThumbnail(`https://cdn.discordapp.com/attachments/749451793854890085/774505061128732683/X.png`)
            .setDescription(`To use roblox commands, ask a server admin to run !enable`)
            .setFooter('Altamonte', client.user.avatarURL())
      const verifiedrolecheck = db.get(`roblox_${message.guild.id}`, 'enabled')
      if(verifiedrolecheck === null){
          return message.channel.send(disabled)
      }
    
            
            const msg = message.channel
            if(message.member.hasPermission("BAN_MEMBERS")) {
            if(message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
                got("https://www.rasb.xyz/api/bans").then((res) => {
                    const allBans = JSON.parse(res.body).discord;
                    var bans = [];

                    // Remove double bans
                    allBans.forEach(function(ban, i) {
                        if(!bans.includes(ban.id)) {
                            bans.push(ban.id);
                        }
                    });

                    message.channel.send(new discord.MessageEmbed()
                        .setTitle("Almost there")
                        .setColor(COLOR)
                        .setDescription(`If you synchronize all bans, \`${bans.length}+\` users will be banned. This acction is irreversible.\n\nIf you are sure, respond to this message with \`yes\`. Type anything else or wait 10s to cancel.`)
                        .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo"));

                    message.channel.awaitMessages(m => m.author == message.author, {max: 1, time: 10000, errors: ["time"]})
                        .then((collected) => {
                            if(collected.first().content == "yes") {
                                message.channel.send(new discord.MessageEmbed()
                                    .setTitle("Syncing")
                                    .setColor(COLOR)
                                    .setDescription(`Time Left (estimate): \`${Math.round(bans.length*2/60)}min\`\nProgress: \`0/${bans.length} bans\``)
                                    .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo")).then(function(progressMsg) {
                                        bans.forEach((id, i) => {
                                            setTimeout(() => {
                                                message.guild.members.ban(id, {days: 0, reason: `Unofficial RASB Synchronization (triggered by ${message.author.id})`}).catch(() => {});
                                                
                                                if(i+1 >= bans.length) {
                                                    progressMsg.edit(new discord.MessageEmbed()
                                                        .setTitle("Bans synced")
                                                        .setColor(COLOR)
                                                        .setDescription(`\`${bans.length} bans\` have been synchronized.`)
                                                        .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo"));
                                                } else {
                                                    progressMsg.edit(new discord.MessageEmbed()
                                                        .setTitle("Syncing")
                                                        .setColor(COLOR)
                                                        .setDescription(`Time Left (estimate): \`${Math.round((bans.length-i-1)*2/60)}min\`\nProgress: \`${(i+1)}/${bans.length} bans\``)
                                                        .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo"));
                                                }
                                            }, i * 2000);
                                        });
                                    });
                            } else {
                                message.channel.send(new discord.MessageEmbed()
                                    .setTitle("Prompt cancelled")
                                    .setColor(COLOR)
                                    .setDescription("The prompt was cancelled successfully. You can start another by running `s?sync`.")
                                    .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo"));
                            }
                        })
                        .catch(() => {
                            message.channel.send(new discord.MessageEmbed()
                                .setTitle("Prompt expired")
                                .setColor(COLOR)
                                .setDescription("The synchronization prompt has expired. You can start another by running `s?sync`.")
                                .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo"));
                        });
                }).catch((err) => {
                    throw err;
                });
            } else {
                message.channel.send(new discord.MessageEmbed()
                    .setTitle("Insufficient Permission(s)")
                    .setColor(COLOR)
                    .setDescription("The bot requires following permission(s) to run: `BAN_MEMBERS`")
                    .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo"));
            }
        } else {
            message.channel.send(new discord.MessageEmbed()
                .setTitle("Insufficient Permission(s)")
                .setColor(COLOR)
                .setDescription("You do not have the required permission(s) to run this command: `ADMINISTRATOR`")
                .setFooter("We are not affiliated with RASB. | Copyright (c) 2020, MoaufmKlo"));
        }
    }

}


