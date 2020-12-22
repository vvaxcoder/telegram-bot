const Scene = require('telegraf/scenes/base');

const to = new Scene('to');
to.enter((ctx) =>  {
    ctx.reply(`
        Hi! Please, send a code of from language
    `);
});

to.on('text', (ctx) => {
    if (ctx.message.text.length > 2 || ctx.message.text.length === 0) {
        return ctx.reply('Language must be at least 2 chars');
    }

    ctx.reply('Thanks for setting language');
    return ctx.scene.leave();
});

to.on('message', (ctx) => {
    return ctx.reply('Only text message please');
});

to.leave((ctx) => {
    ctx.reply(`
        Thanks for setting language
    `);
});

module.exports = to;