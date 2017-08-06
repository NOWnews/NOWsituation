import koa from 'koa';
import path from 'path';
const resolve = file => path.resolve(__dirname, file)

const app = new koa();

app.use('/dist', express.static(resolve('./dist')));

app.get('/manifest.json', (req, res) => {
    return res.sendFile(resolve('./manifest.json'));
});

app.get('*', (req, res) => {
    return res.sendFile(resolve('./index.html'));
});

module.exports = app;
