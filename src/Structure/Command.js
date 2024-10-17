const { readdirSync } = require("fs");
const { log } = require('nyx-logger');
const upath = require('upath');
module.exports = (bot) => {
    let totalCommandsLoaded = 0;

    const loadCommandsFromDirectory = (directory) => {
        const commandFiles = readdirSync(directory).filter(f => f.endsWith('.js'));

        for (const file of commandFiles) {
            try {
                const command = require(upath.join(directory, file));
                bot.commands.set(command.help.name, command);
                totalCommandsLoaded++;
            } catch (error) {
                log("error", `Error loading command ${file}: ${error.message}`);
            }
        }
    };

    const commandsPath = upath.join(__dirname, '../../src/Commands');

    try {
        loadCommandsFromDirectory(commandsPath);

        const commandSubFolders = readdirSync(commandsPath).filter(f => !f.endsWith('.js'));
        commandSubFolders.forEach(folder => {
            loadCommandsFromDirectory(upath.join(commandsPath, folder));
        });

        log("info", `Total commands loaded: ${totalCommandsLoaded}`);
    } catch (error) {
        log("error", `Failed to load commands: ${error.message}`);
    }
};