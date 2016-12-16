import cheerio from 'cheerio';
import fetch from 'node-fetch';

export default class headline {

    // 建構式
    constructor() {
    }

    facebook = () => {
        let basicUrl = 'https://graph.facebook.com/v2.8/102884532662?fields=fan_count';
        let accessToken = '132863386747341%7CTQ6gBA9E40cop1BjDhTCp4fE9wQ';
        return fetch(`${basicUrl}&access_token=${accessToken}`, {
                timeout: 10000
            })
            .then((res) => {
                return res.json();
            })
            .then(({ fan_count }) => {
                return Promise.resolve(fan_count);
            });
    }

    weibo = () => {
        return fetch('http://tw.weibo.com/nownews', {
                timeout: 15000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let fans = $('#mInfo .fansNum strong').html();
                return Promise.resolve(fans);
            });
    }
};
