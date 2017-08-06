import koa from 'koa';
import cors from 'kcors';
import koaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongo from 'koa-mongo';
import moment from 'moment-timezone';
import pusher from './server/pusher.js';

const app = koa();
const router = koaRouter();

app.use(bodyParser());

app.use(cors());

app.use(mongo({
    uri: 'mongodb://localhost:27017/situation-admin'
}));

router.post('/admin', function*(next) {

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

pusher();

module.exports = app;
