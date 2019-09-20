const Discord = require('discord.js');
const client = new Discord.Client ();
var prefix = "?";
var bot = new Discord.Client ();
var Client = new Discord.Client ();



bot.login('NjI0Mjk4NDgxNzcwNTYxNTM2.XYO9WQ.bKcWkpXIYP6P8P_Rnq16V_HReh0');


bot.on('ready', function () {
    console.log('Bot connecté')
    bot.user.setGame('Serenity E-Sport', 'https://twitch.tv/Serenity-E-Sport')
});

bot.on('message', message => {
    if (message.content.startsWith("?ban")) {
        if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            if (message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                var utoban = message.mentions.users.first()
                if (!utoban) {
                    var h_embed = new Discord.RichEmbed()
                        .setTitle("Aide : ?ban")
                        .setDescription("_ _")
                        .setThumbnail("https://i.imgur.com/O3DHIA5.gif")
                        .addField("Aide : x!ban", "Bannir un utilisateur du serveur.\nExemple : x!ban @Draco1544#8582\n\nRequiert la permission **BAN_MEMBERS**")
                    message.channel.sendEmbed(h_embed)
                } else {
                        if (message.guild.member(utoban).bannable) {
                            message.guild.member(utoban).ban()
                            message.reply("Cet utilisateur ("+utoban.tag+") a été banni avec succès.")
                        } else {
                            message.reply("Je ne peux pas bannir cet utilisateur.")
                    }
                }
            } else {
                message.reply("Il me faut la permission __**BAN_MEMBERS**__ pour faire cela.")
            }
        } else {
            message.reply("Il te faut la permission __**BAN_MEMBERS**__ pour faire cela.")
        }
    }
})

bot.on ('message', messsage => {
if(message.content.startsWith("?mp")) {
 
    var args = message.content.split(" ").slice(1);
    var msge = args.join(' ');

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
    if(!msge) return message.channel.send("Precise un message")

    var mpall = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setColor("RANDOM")
    .addField("Annoce a lire", msge);
    message.delete()
    message.guild.members.map(m => m.send(mpall))
}})

bot.on('message', message => {
    if (message.content.startsWith("?kick")) {
        if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            if (message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                var utokick = message.mentions.users.first()
                if (!utokick) {
                    var h_embed = new Discord.RichEmbed()
                        .setTitle("Aide : x!kick")
                        .setDescription("_ _")
                        .setThumbnail("https://i.imgur.com/O3DHIA5.gif")
                        .addField("Aide : ?kick", "Kick une persone sur le serveur \nExemple : ?kick @Draco1544#8582\n\nRequiert la permission **KICK_MEMBERS**")
                    message.channel.sendEmbed(h_embed)
                } else {
                        if (message.guild.member(utokick).kickable) {
                            message.guild.member(utokick).kick()
                            message.reply("Cet utilisateur ("+utokick.tag+") a été kick avec succès.")
                        } else {
                            message.reply("Je ne peux pas kick cet utilisateur.")
                    }
                }
            } else {
                message.reply("Il me faut la permission __**KICK_MEMBERS**__ pour faire cela.")
            }
        } else {
            message.reply("Il te faut la permission __**KICK_MEMBERS**__ pour faire cela.")
        }
    }
})

bot.on('message', message => {
    if (message.content === '?ping') {
      console.log("PING")
      message.channel.send('Ping du bot : **'+Math.round(bot.ping)+"ms**")
    }
  })

  bot.on('message', message =>{
    if (message.content.startsWith("?help")) {
        message.delete(0);     
        message.channel.send("", {
        embed: {
        color: 0x00AAFF,
        author: message.author.name,
        title: 'VOIRE LES COMMANDES DU BOT!',
        description: 'LES PREFIX ?',
        fields: [
        { 
        name: '**?help **',
        value: "cela vous permet de voir toute les commandes du Bot!"
        }, {     
        name: '**?say**',
        value: "permet de parler avec un text"
        }, {    
        name: '**?kick**',
        value: "kick une personne"
        }, {  
        name: '**?ban**',
        value: "ban une personne "  
        }, {
        name: '**?userinfo**',
        value: "Permet de voir les infos de toi ou d'autres personnes"
        }, {    
        name: '**?serverinfo**',
        value: "vous envoie les informations du serveur"
        }, {
        name: '**?ping**',
        value: "Sert a voir le ping du bot"
        }],
        thumbnail: {
        url: message.client.iconURL
        },
        timestamp: new Date(),
        footer: {
        text: '© Serenity E-Sport .',
        }}});
        }
    });

  

bot.on("guildCreate", guild => {
    console.log(`new serv : ${guild.name}, dirigé par ${guild.owner.user.username}`);
  });

  bot.on("guildMemberAdd", member => {
    console.log("Bienvenue " + member.user.username + " Sur le Serveur Serenity E-Sport !")
 });
  
 bot.on("guildMemberRemove", member => {
    console.log(member.user.username + " Est parti de " + member.guild.name)
 });

  bot.on('message', message => {
    if(message.content.startsWith("?serverinfo")) {
        if (message.guild) {
        var sowner = message.guild.owner.user.username
        var otag = message.guild.owner.user.discriminator
        var server_embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setImage(message.guild.iconURL)
        .setTitle(message.guild.name)
        .setDescription("Informations du serveur " + message.guild.name)
        .addField("nombre de membres", message.guild.memberCount)
        .addField("nombre de channels", message.guild.channels.size)
        .addField("nombre de rôles", message.guild.roles.size)
        .addField("Fondateur", sowner + '#' + otag)
        .addField("Region", message.guild.region)
        .addField("Nombre de roles", message.guild.roles.size)
        .addField("_ _", "Icone du serveur")
        .setFooter("Serenity E-Sport", message.author.avatarURL)
        message.channel.send(server_embed)
        }
      }

})

bot.on('message', message => {
    if(message.content.startsWith("?userinfo")) {
      var memberavatar = message.author.avatarURL
      var membername = message.author.username
         var mentionned = message.mentions.users.first();
        var getvalueof;
        if(mentionned){
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }

        if(getvalueof.bot == true){
            checkbot = "L'utilisateur est un bot :robot:";
        } else {
            checkbot = "N'est pas un bot :no_entry: :robot:";
        }
        if(getvalueof.presence.status == 'online'){
          status = "En ligne"; 
        } else if (getvalueof.presence.status = 'dnd') {
          status = "Ne pas déranger"
          } else if (getvalueof.presence.status = 'idle') {
            status = "Inactif"
          } else if (getvalueof.presence.status = 'invisible') {
            status = "Offline"
          }

      message.channel.sendMessage({
          embed: {
            type: 'rich',
            description: '',
            fields: [{
              name: 'Pseudo',
              value: getvalueof.username,
              inline: false
            }, {
              name: 'User id',
              value: getvalueof.id,
              inline: false
            },{
              name: '#',
              value: getvalueof.discriminator,
              inline: false
    },{
              name: 'Status',
              value: status,
              inline: false
    },{
              name: 'Bot',
              value: checkbot,
              inline: false
    }],
          image: {
        url: getvalueof.avatarURL
          },
            color: 0xE46525,
            footer: {
              text: 'Serenity E-Sport',
              proxy_icon_url: ' '
            },

            author: {
              name: membername,
              icon_url: memberavatar,
              proxy_icon_url: ' '
            }
          }
    })
    }
    })



bot.on ('message', message => { 
    if(message.content.startsWith('?say')) {  
     if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
      if (message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
         var text = message.content.split(' ').slice(1).join('')
         if (!text) return message.reply('hey , tu as oublié ce que tu voulais marquée ^^')
         message.channel.send(text)
    } else {
     message.reply("Il me faut la permission __**ADMINISTRATOR**__ pour faire cela.")
}
} else {
message.reply("Il te faut la permission __**ADMINISTRATOR**__ pour faire cela.")
}}
  
})


   
    
        
