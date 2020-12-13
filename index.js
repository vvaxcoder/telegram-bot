const Telegraf = require("telegraf");
const { token } = require("./config");
const bot = new Telegraf(token);
const axios = require("axios");

//run the bot
bot.start(ctx => {
    return ctx.reply('Welcome Monobank telegramm bot');
});

bot.hears("currency", async (ctx) => {
  try {
    const response = await axios.get("https://api.monobank.ua/bank/currency");
    // console.log(response);
    const currencyArr = response.data;
    return ctx.reply(response.data[0]);
  } catch (error) {
    return ctx.reply("Error on request");
  }
});

bot.startPolling();
