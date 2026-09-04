const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Replace with your bot token
const TOKEN = 'NzA3Njk4ODMyOTUxMjE0MTU4.GZOyj8.RkApIUnWjU5WVn37S4_ubKYkK0LQdRXqKk8o7s';


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });




client.once(Events.ClientReady, async () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
    
    // Charger les embeds actifs depuis le fichier de sauvegarde
    await loadActiveEmbeds();
    
    // Démarrer la mise à jour automatique des embeds toutes les minutes
    startAutoUpdate();
});







client.login(TOKEN);


