const { EmbedBuilder } = require("discord.js");

exports.help = {
    name: 'readme'
}

exports.run = async (bot, message) => {
    const Embed = new EmbedBuilder()
        .setTitle("Readme")
        .setDescription(`
# Discord Bot Template (Prefix-Based)

A template for a Discord bot that uses a prefix-based command system. This bot is designed to be easily extensible and customizable.

## Features

- Prefix-based command handling.
- Event and command management in separate files.
- Support for embedded messages for better presentation.
- Easy addition of new commands and events.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Discord.js](https://discord.js.org/) (version 14 or higher)

## Installation

- Install the dependencies

***npm install***

# Setup 

clients: {
        token: 'YOUR_TOKEN',
        prefix: '!',
        embedColor: '#7f00ff',
}

# Contributing

- Contributions are welcome! If you have suggestions or want to add new features, feel free to open an issue or submit a pull request.
`)
        .setColor(bot.config.clients.embedColor)
        .setTimestamp()

    message.channel.send({ embeds: [Embed] })
}