const Telegraf = require("telegraf");
const { token } = require("./config");
const bot = new Telegraf(token);

//run the bot
bot.start(ctx => ctx.reply("Start command"));
bot.help(ctx => ctx.reply("Help command"));
bot.settings(ctx => ctx.reply("Settings command"));

// bot.command("stop", (ctx) => {
//     return ctx.reply("Stop command");
// });
bot.command(["stop", "finish"], (ctx) => {
    return ctx.reply("Stop command");
});

bot.launch().then(result => console.log("Bot has started")).catch(err => console.log(err));