const Telegraf = require("telegraf");
const { token } = require("../config");
const Stage = require('telegraf/stage');
const Scene = require('telegraf/scenes/base');
const session = require('telegraf/session');

const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');
const fromScenes = require('./scenes/from');
const toScenes = require('./scenes/to');

const init = async(bot, config) => {
    const stage = new Stage([fromScenes, toScenes]);
    bot.use(session());
    bot.use(stage.middleware());
    //commands
    bot.start(startCommand());
    bot.help(helpCommand());
    bot.command('from', (ctx) => ctx.scene.enter('from'));
    bot.command('to', (ctx) => ctx.scene.enter('to'));
    return bot;
};

init(new Telegraf(token)).
    then(async(bot) => {
        await bot.launch();
        console.log(`Launched ${new Date()}`);
    });

module.exports = init;