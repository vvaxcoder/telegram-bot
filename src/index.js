const Telegraf = require("telegraf");
const { token } = require("../config");

const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');

const init = async(bot, config) => {
    //commands
    bot.start(startCommand());
    bot.help(helpCommand());
    return bot;
};

init(new Telegraf(token)).
    then(async(bot) => {
        await bot.launch();
        console.log(`Launched ${new Date()}`);
    });

module.exports = init;