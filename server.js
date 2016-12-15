import express from 'express';
import { pusher } from './lib';

let app = express();

pusher();
module.exports = app;
