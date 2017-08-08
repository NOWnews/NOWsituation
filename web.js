import koa from 'koa';
import koaRouter from 'koa-router';
import fs from 'fs';
import server from 'koa-static-server';

const app = new koa();
const router = new koaRouter();

app.use(server({rootDir: 'dist', rootPath: '/dist'}))

router.get('/manifest.json', async (ctx) => {
    ctx.type = 'json';
    ctx.body = fs.createReadStream('manifest.json');
});

router.get('*', async (ctx) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('index.html');
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
