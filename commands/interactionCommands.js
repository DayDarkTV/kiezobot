const {Client, MessageEmbed} = require("discord.js")

class InteractionCommands {

    static Hug(message, bot) {
        
        var mention= message.mentions.members.first();
        if (!mention) {
            message.channel.send("you didnt mention a member!");
            return;
        }
        var hugLinks = ['https://media1.tenor.com/images/8ac5ada8524d767b77d3d54239773e48/tenor.gif', 'https://media1.tenor.com/images/3fee00811a33590e4ee490942f233c78/tenor.gif', 'https://media1.tenor.com/images/3264bcc47ee47ebbdd441f9f1d203542/tenor.gif', 'https://media1.tenor.com/images/b7492c8996b25e613a2ab58a5d801924/tenor.gif', 'https://media1.tenor.com/images/f20151a1f7e003426ca7f406b6f76c82/tenor.gif', 'https://media1.tenor.com/images/ce9dc4b7e715cea12604f8dbdb49141b/tenor.gif', 'https://media1.tenor.com/images/d7529f6003b20f3b21f1c992dffb8617/tenor.gif', 'https://media1.tenor.com/images/2d4138c7c24d21b9d17f66a54ee7ea03/tenor.gif', 'https://media1.tenor.com/images/24ac13447f9409d41c1aecb923aedf81/tenor.gif', 'https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif', 'https://images-ext-2.discordapp.net/external/DW_JAjCEp8cv0BuB8MqCsJcGrcP0hMNyi902U841x5E/https/cdn.weeb.sh/images/B11CDkhqM.gif'];
        var hugGif = hugLinks [Math.floor(Math.random()*hugLinks.length)];
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} hugged ${mention.user.username}`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setImage(hugGif)

        message.channel.send(embed);
    }

    static Pat(message, bot) {
        var mention= message.mentions.members.first();
        if (!mention) {
            message.channel.send("you didnt mention a member!");
            return;
        }
        var patLinks = ['https://media1.tenor.com/images/153e9bdd80008e8c0f94110450fcbf98/tenor.gif', 'https://media1.tenor.com/images/f330c520a8dfa461130a799faca13c7e/tenor.gif', 'https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif', 'https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif', 'https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif', 'https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif', 'https://media1.tenor.com/images/0ccd912ac62159482be3fa6c1024c9a8/tenor.gif', 'https://media1.tenor.com/images/641a584c05345c733e8e5d94f906e53c/tenor.gif'];
        var patGif = patLinks [Math.floor(Math.random()*patLinks.length)];
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} patted ${mention.user.username}`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setImage(patGif)

        message.channel.send(embed);
    }

    static Sleep(message, bot) {
        var slepLinks = ['https://media1.tenor.com/images/2b28752fc2053530b542f0cacc5c786a/tenor.gif', 'https://media1.tenor.com/images/0bd8e7d1068514123f9ee2394a38ca7f/tenor.gif', 'https://media1.tenor.com/images/592fc38722fc9fe4a98d88a71569e9c8/tenor.gif', 'https://media1.tenor.com/images/75c60bb907bcab0b5396877194b9df50/tenor.gif', 'https://media1.tenor.com/images/f7be21393ddf68340842ae8558065614/tenor.gif', 'https://media1.tenor.com/images/cd0ca99140c4a83914ca785f2f3ca97c/tenor.gif', 'https://media1.tenor.com/images/f5021b88e97753846cb262690fab7470/tenor.gif', 'https://media1.tenor.com/images/3157a49464f04af4b7669987ede71282/tenor.gif'];
        var slepGif = slepLinks [Math.floor(Math.random()*slepLinks.length)];
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} is getting sleepy~`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setImage(slepGif)

        message.channel.send(embed);
    }
    
    static Kiss(message, bot) {
        
        var mention= message.mentions.members.first();
        if (!mention) {
            message.channel.send("you didnt mention a member!");
            return;
        }
        var kissLinks = ['https://media1.tenor.com/images/31362a548dc7574f80d01a42a637bc93/tenor.gif', 'https://media1.tenor.com/images/45e529c116a1758fd09bdb27e2172eca/tenor.gif', 'https://media1.tenor.com/images/b1189e353db0bed3521885bec284264b/tenor.gif', 'https://media1.tenor.com/images/5c712c9fc3f17b1735a36b8ec65996ba/tenor.gif', 'https://media1.tenor.com/images/04c894c51f70dd24acd59ec5392a1584/tenor.gif', 'https://media1.tenor.com/images/ef9687b36e36605b375b4e9b0cde51db/tenor.gif', 'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif'];
        var kissGif = kissLinks [Math.floor(Math.random()*kissLinks.length)];
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} kissed ${mention.user.username}`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setImage(kissGif)

        message.channel.send(embed);
    }
    
    static Kill(message, bot) {
        
        var mention= message.mentions.members.first();
        if (!mention) {
            message.channel.send("you didnt mention a member!");
            return;
        }
        var killLinks = ['https://media1.tenor.com/images/456711f6c7baf8e0005845ab9684b1e8/tenor.gif', 'https://media.discordapp.net/attachments/632692645314953247/639994000664952837/wG2iEh.gif', 'https://media1.tenor.com/images/9511fd925439d53370c2eace494bccf4/tenor.gif'];
        var killGif = killLinks [Math.floor(Math.random()*killLinks.length)];
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} killed ${mention.user.username}`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setImage(killGif)

        message.channel.send(embed);
    }
    
    static Pout(message, bot) {
        var poutLinks = ['https://media1.tenor.com/images/2057a85895561a8e70c59b076c60aa56/tenor.gif', 'https://media1.tenor.com/images/387adb2cfa06323f299aec4ab5e399c7/tenor.gif', 'https://media1.tenor.com/images/e15433a7af99094cc98df27802b8948c/tenor.gif', 'https://media1.tenor.com/images/b7e132fd3f4e110ea54ef8aa8f4eebbe/tenor.gif', 'https://media1.tenor.com/images/667d8a04d2390a8c6bf33caca9bfb9a6/tenor.gif', 'https://media1.tenor.com/images/271668b1037633d7f7ae63dc1a1c29f2/tenor.gif', 'https://media1.tenor.com/images/c9c9ff2eed3dff5c3b9f7c0c033704da/tenor.gif', 'https://media1.tenor.com/images/097fa6653fdcb290dc96d9b4f0e47fc8/tenor.gif', 'https://media1.tenor.com/images/76081e508f20ac1525d1a6ee495869c6/tenor.gif', 'https://media1.tenor.com/images/b25c3211c622490eef77f8878f2c8fc8/tenor.gif', 'https://media1.tenor.com/images/760ec8be1ccf4e9ca49f976b34cdc6e9/tenor.gif'];
        var poutGif = poutLinks [Math.floor(Math.random()*poutLinks.length)];
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} is acting pouty~`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setImage(poutGif)

        message.channel.send(embed);
    }
    
    static Nom(message, bot) {
        
        var mention= message.mentions.members.first();
        if (!mention) {
            message.channel.send("you didnt mention a member!");
            return;
        }
        var nomLinks = ['https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif', 'https://media1.tenor.com/images/ec08e4d20e72da853da1cb47135deedf/tenor.gif', 'https://media1.tenor.com/images/7afee361f8fe8a9eec2995ec8aabf9fa/tenor.gif', 'https://media1.tenor.com/images/afc62f4f8af03d864b366911c8b80c09/tenor.gif', 'https://media1.tenor.com/images/e98420707c0d644a7bea3d0f1717ee9c/tenor.gif', 'https://media1.tenor.com/images/6b0984da89f2c426e08dd569af00e8ef/tenor.gif', 'https://media1.tenor.com/images/ea143f93de95d12704cb6194af769a1e/tenor.gif', 'https://media1.tenor.com/images/a5f686e00aaebc7315fd930c790de91e/tenor.gif', 'https://media1.tenor.com/images/f1f260b2a5e54f093ecfd0377dd5aa8b/tenor.gif'];
        var nomGif = nomLinks [Math.floor(Math.random()*nomLinks.length)];
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} nommed on ${mention.user.username}`)
            .setFooter(`${message.author.tag}`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setAuthor(`KiezoBot`, `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png?size=128`)
            .setColor(0xff0000)
            .setImage(nomGif)

        message.channel.send(embed);
    }

}
/*
<div class="tenor-gif-embed" data-postid="9920978" data-share-method="host" data-width="100%" data-aspect-ratio="1.7913669064748199"><a href="https://tenor.com/view/hug-anime-love-dragon-loli-gif-9920978">Loli Dragon GIF</a> from <a href="https://tenor.com/search/loli-gifs">Loli GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
*/
module.exports = InteractionCommands;