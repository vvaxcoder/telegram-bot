const Scene = require('telegraf/scenes/base');

const from = new Scene('from');
from.enter((ctx) =>  {
    ctx.reply(`
        Hi! Please, send a code of from language
    `);
});

from.on('text', (ctx) => {
    if (ctx.message.text.length > 2 || ctx.message.text.length === 0) {
        return ctx.reply('Language must be at least 2 chars');
    }

    ctx.reply('Thanks for setting language');
    return ctx.scene.leave();
});

from.on('message', (ctx) => {
    return ctx.reply('Only text message please');
});

from.leave((ctx) => {
    ctx.reply(`
        Thanks for setting language
    `);
});

module.exports = from;