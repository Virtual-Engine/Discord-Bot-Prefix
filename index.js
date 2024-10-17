const { Client, IntentsBitField, Collection } = require('discord.js');
const bot = new Client({ intents: new IntentsBitField(3276799) });
const { log, logfile } = require('nyx-logger')

bot.commands = new Collection();
bot.config = require('./config');

log("asci", `
                                                                                                                       
  _|      _|  _|              _|                          _|      _|_|_|_|                      _|                      
  _|      _|      _|  _|_|  _|_|_|_|  _|    _|    _|_|_|  _|      _|        _|_|_|      _|_|_|      _|_|_|      _|_|    
  _|      _|  _|  _|_|        _|      _|    _|  _|    _|  _|      _|_|_|    _|    _|  _|    _|  _|  _|    _|  _|_|_|_|  
    _|  _|    _|  _|          _|      _|    _|  _|    _|  _|      _|        _|    _|  _|    _|  _|  _|    _|  _|        
      _|      _|  _|            _|_|    _|_|_|    _|_|_|  _|      _|_|_|_|  _|    _|    _|_|_|  _|  _|    _|    _|_|_|  
                                                                                            _|                          
                                                                                        _|_|                            
 `, "cyan");
 
log("done", "Initialize Virtual Engine");

require('./src/Structure/Event')(bot);
require('./src/Structure/Command')(bot);

bot.login(bot.config.clients.token);

logfile.set_log_file("log.txt");