const Depug = require("./commands/depugCommands");
const Admin = require("./commands/adminCommands");
const Interactions = require("./commands/interactionCommands");

class CommandHandler {
    
    static Parse(message, args, bot) {
        const cmd = args.shift().toLowerCase();
        switch(cmd) {
            case 'ping':
                Depug.Ping(message);
                break;
            case 'uptime':
                Depug.UpTime(message, bot);
                break;
            case 'help':
                Depug.Help(message, bot);
                break;
            case 'test':
                Depug.Testing(message, bot);
                break;
            case 'avatar':
                Depug.Avatar(message);
                break;


            case 'restart':
                Admin.Restart(message, bot);
                break;
            case 're':
                Admin.Restart(message, bot);
                break;


            case 'hug':
                Interactions.Hug(message, bot);
                break;
            case 'pat':
                Interactions.Pat(message, bot);
                break;
            case 'sleepy':
                Interactions.Sleep(message, bot);
                break;
            case 'kill':
                Interactions.Kill(message, bot);
                break;
            case 'kiss':
                Interactions.Kiss(message, bot);
                break;
            case 'pout':
                Interactions.Pout(message, bot);
                break;
            case 'nom':
                Interactions.Nom(message, bot);
                break;


            case 'asdf':
                
                break;


            default:
                return;
        }
    }

}

module.exports = CommandHandler;