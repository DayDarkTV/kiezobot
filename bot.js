const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const CommandHandler = require("./commandHandler.js");
var bot = client;
var prefix = "k!";

client.on("ready", () => {
    console.log("I am ready!");
    bot.user.setPresence({ activity: { name: 'k!help' }, status: 'active' })
        .then(console.log)
        .catch(console.error);
});
  
var tokenFile = "token.txt";
fs.readFile(tokenFile, "utf8", (err, data) => {
      if (err) console.log(err);
      client.login(data);
});

client.on('message', function(message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");

    CommandHandler.Parse(message, args, bot);
});
