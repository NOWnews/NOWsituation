const koa = require('koa');
const app = koa();
const cors = require('kcors');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const mongo = require('koa-mongo');
const moment = require('moment-timezone');


app.use(bodyParser());

app.use(cors());

app.use(mongo({
    uri: 'mongodb://localhost:27017/situation-admin'
}));

router.get('/admin', function*(next) {
        let result = yield this.mongo.db('situation-admin')
            .collection('info')
            .find({})
            .sort({createdAt: -1})
            .limit(1)
            .toArray();

        this.body = result[0];
    })
    .post('/admin', function*(next) {

        let data = this.request.body;
        data.createdAt = Date.now();
        data.createdFormat = moment(data.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm:ss');;

        let result = yield this.mongo
            .db('situation-admin')
            .collection('info')
            .insert(data);

        this.body = result.ops[0];
    });

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
