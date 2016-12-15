import express from 'express';
import path from 'path';
const resolve = file => path.resolve(__dirname, file)

const app = express()

app.use('/dist', express.static(resolve('./dist')));

app.get('/manifest.json', (req, res) => {
    return res.sendFile(resolve('./manifest.json'));
});

app.get('*', (req, res) => {
    return res.sendFile(resolve('./index.html'));
});

module.exports = app;
