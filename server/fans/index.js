import cheerio from 'cheerio';
import fetch from 'node-fetch';

export default class headline {

    // 建構式
    constructor() {
    }

    facebook = () => {
        return fetch('http://likealyzer.com/facebook/nownews', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let fansHtml = $('#sidebar1 span.spanrub[name="slickbox_fans"]').html();
                // fansHtml = <strong>Likes:</strong> 337,927
                let fansHtmlSplit = fansHtml.split(' ');
                let fans = fansHtmlSplit[1].split(',').join('');
                return Promise.resolve(fans);
            });
    }
    weibo = () => {
        return fetch('http://tw.weibo.com/nownews', {
                timeout: 5000
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
