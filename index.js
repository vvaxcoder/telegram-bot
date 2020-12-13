const Telegraf = require("telegraf");
const { token } = require("./config");
const bot = new Telegraf(token);
const axios = require("axios");
const cc = require("currency-codes");

//run the bot
bot.start(ctx => {
    return ctx.reply('Welcome Monobank telegramm bot');
});

bot.hears(/^[a-zA-Z]+$/i, async (ctx) => {
  const codeFromClient = ctx.message.text;
  const currency = cc.code(codeFromClient);

  if (!currency) {
    return ctx.reply("Currency didn't found");
  }

  try {
    console.log(ctx.message.text);
    const response = await axios.get("https://api.monobank.ua/bank/currency");
    const currencyArr = response.data;
    console.log(currencyArr[0]);
    console.log(currency);
    const foundCurrency = currencyArr.find(item => item.currencyCodeA.toString() === currency.number);

    if (Object.keys(foundCurrency).length === 0) {
      return ctx.reply("Currency didn't found in Monobank");
    }

    return ctx.replyWithMarkdown(`
    CURRENCY: ${currency.code}
    RATE BUY: ${foundCurrency.rateBuy}
    RATE SELL: ${foundCurrency.rateSell}
    `);
  } catch (error) {
    return ctx.reply("Error on request");
  }
});

bot.startPolling();
