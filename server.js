import express from 'express';
import pusher from './server/pusher.js';

let app = express();

pusher();
module.exports = app;
