require('babel-core/register');
require('babel-polyfill');
require('../global.js');

let server = require('../server.js');

let port = process.env.PORT || '5000';
server.listen(port);

console.log(`-------------------------------`);
console.log(`Start NOWsituation pusher server`);
console.log(`Listen Port ${port}`);
console.log(`${NODE_ENV} mode`);
console.log(`-------------------------------`);
