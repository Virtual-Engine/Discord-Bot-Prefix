const { ActivityType, Events } = require('discord.js');
const Discord = require('discord.js')
const moment = require('moment')
const { log, logfile } = require('nyx-logger')
module.exports = {
    name: Events.ClientReady,
    execute(bot) {
        log("info", `Connected to -> ${bot.config.clients.token}`);
        log("info", `Connected to -> ${bot.user.username}`);
        log("info", `Connected to -> ${bot.guilds.cache.size} servers`);
        log("info", "Virtual Engine Initialized");
    }
}