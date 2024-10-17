const { readdirSync } = require("fs");
const { log } = require('nyx-logger');
const upath = require('upath');

module.exports = (bot) => {
    let totalEventsLoaded = 0;
    
    const loadEventsFromDirectory = (directory) => {
        const eventFiles = readdirSync(directory).filter(f => f.endsWith('.js'));

        for (const file of eventFiles) {
            try {
                const event = require(upath.join(directory, file));
                bot.on(event.name, (...args) => event.execute(...args, bot));
                totalEventsLoaded++;
            } catch (error) {
                log("error", `Error loading event ${file}: ${error.message}`);
            }
        }
    };

    const eventsPath = upath.join(__dirname, '../../src/Events');

    try {
        loadEventsFromDirectory(eventsPath);

        const eventSubFolders = readdirSync(eventsPath).filter(f => !f.endsWith('.js'));
        eventSubFolders.forEach(folder => {
            loadEventsFromDirectory(upath.join(eventsPath, folder));
        });

        log("info", `Total events loaded: ${totalEventsLoaded}`);
    } catch (error) {
        log("error", `Failed to load events: ${error.message}`);
    }
};
