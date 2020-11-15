const Telegraf = require("telegraf");
const { token } = require("./config");
const bot = new Telegraf(token);

bot.launch().then(result => console.log("Bot has started")).catch(err => console.log(err));