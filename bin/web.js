require('babel-core/register');
require('babel-polyfill');
let web = require('../web.js');

let env = process.env.NODE_ENV;
let port = process.env.PORT || '8080';

web.listen(port);

console.log(`-------------------------------`);
console.log(`Start NOWsituation web`);
console.log(`Listen Port ${port}`);
console.log(`${env} mode`);
console.log(`-------------------------------`);
