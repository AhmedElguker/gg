<<<<<<< HEAD
<<<<<<< HEAD
const express = require('express');
const app = express();

app.listen(() => console.log('Bird YT'));
app.listen(() => console.log('giveawaybot'));
app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
let fs = require('fs');
const { prefix, token } = require('./config.json');

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`with ${prefix}giveaway`, { type: 'PLAYING' });
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('message', async message => {
  if (message.content.startsWith(`${prefix}`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if (!fs.existsSync('./commands/' + file_name)) return undefined;
    if (fs.existsSync('./commands/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
=======
const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const client = new Client();
const { GiveawaysManager } = require('discord-giveaways');

=======
const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const client = new Client();
const { GiveawaysManager } = require('discord-giveaways');

>>>>>>> f060ad6848b5a1033f9aca4fb99a05785ed44f77
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
<<<<<<< HEAD
>>>>>>> f060ad6848b5a1033f9aca4fb99a05785ed44f77
    }
});

<<<<<<< HEAD
client.login(process.env.token);
=======
=======
    }
});

>>>>>>> f060ad6848b5a1033f9aca4fb99a05785ed44f77
client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));


client.login(config["Bot_Info"].token);
<<<<<<< HEAD
>>>>>>> f060ad6848b5a1033f9aca4fb99a05785ed44f77
=======
>>>>>>> f060ad6848b5a1033f9aca4fb99a05785ed44f77
