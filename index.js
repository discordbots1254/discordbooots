const Discord = require("discord.js");

const TOKEN = "MzY4MDY1NjE4MDU1OTIxNjc1.DMEjgA.CBognkHU0WP-1PETx2lCWztdbHk";

var bot = new Discord.Client();
const PREFIX = ":";




bot.on("message",function(message){




if (message.author.equals(bot.user)) return;
if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()){

    case "credits":
    message.channel.sendMessage("``` OWNER: @[CODEUR-SQUAD]▲Aida▲#0838 ``` ");
    message.channel.sendMessage("``` DEV: @Lolilol LEL#7469 ``` ");
    break;
    case"help":
    message.channel.sendMessage(" :white_check_mark:, **Help sents**");
    message.author.sendMessage("commands prefix ':' Commands list :")
    message.author.sendMessage(":credits - get all credits")
    message.author.sendMessage(":purchase - get all infos for buy the script hub.")
    break;
    case "purchase":
        message.channel.send({embed: {
            color: 3447003,
      
           
            description: "DM THE OWNER OR THE WHITELISTER! ", 
          }});
  break;



    


    default:
    message.channel.sendMessage("ERROR COMMAND!");

}

});

bot.login(process.env.BOT_TOKEN);
