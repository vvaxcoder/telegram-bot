module.exports = () => async (ctx) => {
    ctx.reply(`
    /from - set language
    /to - set translate langauge
    Also you can use this bot in inline-mode.
    Check list here: https://www.iso.org/iso-639-language-codes.html

    This bot uses ISO-639-1 standard.
    `);
};