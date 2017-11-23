const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ';fire me') {
    msg.reply("HOLY SHIT YOUR BODY IS DIE")
  }
});
client.on('message', msg => {
    if (msg.content === ';sp me') {
      msg.reply("Sparkles added")
    }
  });

  client.on('message', msg => {
    if (msg.content === ';admin me') {
      msg.reply("LOL YOU CAN'T ADMIN YOU")
    }
  });

  client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply("``"+new Date().getTime() - msg.createdTimestamp + "``"  + " ms");



      }



  });
 
  client.on(`message`, message => {
    if (message.content === "/download") {
      let modRole = message.guild.roles.find("name", "Buyers");
      if(message.member.roles.has(modRole.id)) {
        message.channel.sendMessage(`YAY! Your an Buyers check your DMs.`)
        message.author.sendMessage("Thanks for purchasing :")
        message.author.sendMessage("Website : http://bridge-script-hub-official.cf ")
        message.author.sendMessage("Download : http://bridge-script-hub-official.cf/Bridges%20files.zip ")
        message.author.sendMessage("Forum : http://bridge-script-hub-official.cf/forum/ ")
        message.author.sendMessage("Whitelist website : http://bridge-script-hub-official.cf/ClientPage/ `DM THE OWNER FOR GET YOUR USERNAME AND PASSWORD`")
      } else {
        return message.reply("Your not an Buyers :(")
      }
    }
  });

client.login('process.env.BOT_TOKEN');
