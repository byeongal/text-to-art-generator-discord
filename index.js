require("dotenv").config();
const { Client, Collection, Intents } = require("discord.js");
const { DISCORD_TOKEN } = process.env;

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  console.dir(interaction);
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  } else {
    await interaction.reply(`${interaction.commandName} is not supported`);
  }
});

client.login(DISCORD_TOKEN);
