const {Client, MessageEmbed} = require('discord.js');

class DepugCommands {

    static Ping(message) {
        message.channel.send('Pinging...').then(sent => {
            var ping = sent.createdTimestamp - message.createdTimestamp;
            sent.edit(`Pong! Took ${ping}ms`);
        });
    }

    static UpTime(message, bot) {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        var botUp = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        message.channel.send(`My current uptime is ${botUp}`);
    }

    static Testing(message, bot) {
        const embed = new MessageEmbed()
          .setTitle('Testu~')
          .setColor(0xff0000)
          .setDescription('testing command~')
          .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
          .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
          .setDescription(`♥`)
          
        message.channel.send(embed);
    }
    static Avatar(message) {
        
        var mention= message.mentions.members.first();
        if (mention) {
            var image = `https://cdn.discordapp.com/avatars/${mention.user.id}/${mention.user.avatar}.png?size=128`
            var person = mention.user;
        } else {
            var image = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`
            var person = message.author;
        }
        const embed = new MessageEmbed()
            .setTitle(`${person.tag}'s avatar`)
            .setImage(image)
        message.channel.send(embed);
    }

    static Help(message, bot) {
        const embed = new MessageEmbed()
            .setTitle(`Current Commands List`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setDescription(`k!help - Lists the current commands~ \nk!ping - Gets my ping~ \nk!uptime - Tells you how long I have been running~ \n\nk!hug - Hug your favorite person~! \nk!pat - Headpat your favorite person~! \nk!kiss - Kiss your favorite person~! \nk!nom - Nom on your favorite snacc~! \nk!kill - Kill your favorite baka~! \nk!pout - Awee, are you maddd~ \nk!sleepy - Awee, what a sleepy cutie~`)


        message.channel.send(embed);
    }
    
}

/*

        message.channel.send(`${message.author}`);
        message.channel.send(`${message.guild.name}`);
        message.channel.send(`${message.guild.description}`);
        message.channel.send(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`);
*/

module.exports = DepugCommands;