const franc = require('franc');
const langs = require('langs');
const color = require('color');
const input = process.argv[2];
const langCode = franc(input);

const lang = langs.where("3", langCode);
console.log(lang.name)

