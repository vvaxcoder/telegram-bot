const Telegraf = require("telegraf");
const { token } = require("./config");
const bot = new Telegraf(token);

//run the bot
bot.start(ctx => ctx.reply("Start command"));
bot.help(ctx => ctx.reply("Help command"));
bot.settings(ctx => ctx.reply("Settings command"));

//use string
// bot.command("stop", (ctx) => {
//     return ctx.reply("Stop command");
// });

//use array of string
bot.command(["stop", "finish"], (ctx) => {
    return ctx.reply("Stop command");
});

bot.mention("botfather", (ctx) => {
    return ctx.reply("Botfather mentioned");
});

bot.phone("+797878787878", (ctx) => {
    return ctx.reply("Phone number");
});

bot.hashtag("bot", (ctx) => {
    return ctx.reply("bot hashtaged");
});

bot.launch().then(result => console.log("Bot has started")).catch(err => console.log(err));