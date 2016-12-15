import Pusher from 'pusher-js';
import config from '../../config';
const { key, channelPrefix } = config.pusher;
const pusher = new Pusher(key);

export const sitiuationChannel = pusher.subscribe(`${channelPrefix}sitiuationChannel`);

