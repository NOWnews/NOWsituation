require('../global.js');

let admin = require('../admin.js');
let port = process.env.PORT || '3000';
admin.listen(port);
console.log(`-------------------------------`);
console.log(`Start NOWsituation admin api`);
console.log(`Listen Port ${port}`);
console.log(`${NODE_ENV} mode`);
console.log(`-------------------------------`);
