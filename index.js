const Telegraf = require("telegraf");
const { token } = require("./config");
const bot = new Telegraf(token);

//use middleware BEFORE your code
bot.use(async (ctx, next) => {
  ctx.reply("Middleware");
  ctx.state.isSend = true;
  await next(ctx);
});

//run the bot
bot.start(ctx => {
    const { state } = ctx;
    return ctx.reply(`Start command ${state.isSend}`);
});
bot.help(ctx => ctx.reply("Help command"));
bot.settings(ctx => ctx.reply("Settings command"));

//use string
// bot.command("stop", (ctx) => {
//     return ctx.reply("Stop command");
// });

//use array of string
bot.command(["stop", "finish"], ctx => {
  return ctx.reply("Stop command");
});

bot.mention("botfather", ctx => {
  return ctx.reply("Botfather mentioned");
});

bot.phone("+797878787878", ctx => {
  return ctx.reply("Phone number");
});

bot.hashtag("bot", ctx => {
  return ctx.reply("bot hashtaged");
});

bot.command("ctx", ctx => {
  console.log(ctx);
  return ctx.reply("ok");
});

bot.hears('dog', (ctx) => {
    ctx.reply('whatever');
});

bot
  .launch()
  .then(result => console.log("Bot has started"))
  .catch(err => console.log(err));
