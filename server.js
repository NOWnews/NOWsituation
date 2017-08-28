import koa from 'koa';
import cors from 'kcors';
import koaRouter from 'koa-router';
import koaBody from 'koa-body';
import mongo from 'koa-mongo';
import moment from 'moment-timezone';
import pusher from './server/pusher';
import initData from './server/initData';

const app = new koa();
const router = new koaRouter();

app.use(koaBody());

app.use(cors());

app.use(mongo({
    uri: 'mongodb://localhost:27017/situation-admin'
}));

router.get('/admin', async function(ctx, next) {
        let result = await ctx.mongo.db('situation-admin')
            .collection('info')
            .find({})
            .sort({createdAt: -1})
            .limit(1)
            .toArray();
        ctx.body = result[0] || initData;
    }).post('/admin', async function(ctx, next) {
    let data = ctx.request.body;
    data.createdAt = Date.now();
    data.createdFormat = moment(data.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm:ss');;

    let result = await ctx.mongo
        .db('situation-admin')
        .collection('info')
        .insert(data);
    ctx.body = result.ops[0];
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(pusher());

module.exports = app;
