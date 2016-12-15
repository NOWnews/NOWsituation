import cheerio from 'cheerio';
import fetch from 'node-fetch';

export default class headline {

    // 建構式
    constructor() {
    }

    // 東森新聞雲
    ettoday = () => {
        return fetch('http://www.ettoday.net/', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let title = $('.firstline > .run > .piece:first-child img').attr('alt');
                let url = $('.firstline > .run > .piece:first-child a').attr('href');
                return Promise.resolve({
                    type: 'ettoday',
                    name: '東森新聞雲',
                    title: title,
                    url: `http://www.ettoday.net${url}`
                });
            });
    }

    // 蘋果
    appledaily = () => {
        return fetch('http://www.appledaily.com.tw/', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let title = $('#carousel > .item:first-child img').attr('alt');
                let url = $('#carousel > .item:first-child a').attr('href');
                return Promise.resolve({
                    type: 'appledaily',
                    name: '蘋果日報',
                    title: title,
                    url: `http://www.appledaily.com.tw${url}`
                });
            });
    }

    // 自由時報
    ltn = () => {
        return fetch('http://www.ltn.com.tw/', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let title = $('.rbox > ul > .headline > a').text();
                let url = $('.rbox > ul > .headline > a').attr('href');
                return Promise.resolve({
                    type: 'ltn',
                    name: '自由電子報',
                    title: title,
                    url: `http://news.ltn.com.tw${url}`
                });
            });
    }

    // 聯合報
    udn = () => {

        return fetch('http://udn.com/common2/maintabs/2', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let href = $('#tabs > dl > dt:first-child a').attr('href');
                return fetch(`http://udn.com${href}`, { timeout: 5000 });
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let title = $('#carousel > a:first-child h1').text();
                let url = $('#carousel > a:first-child').attr('href');
                return Promise.resolve({
                    type: 'udn',
                    name: '聯合新聞網',
                    title: title,
                    url: url
                });
            });
    }

    // 中國時報
    chinatimes = () => {
        return fetch('http://www.chinatimes.com/', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let title = $('.idx_headline_list > li:first-child img').attr('title');
                let url = $('.idx_headline_list > li:first-child a').attr('href');
                return Promise.resolve({
                    type: 'chinatimes',
                    name: '中時電子報',
                    title: title,
                    url: url
                });
            });
    }

    // 中央社
    cna = () => {
        return fetch('http://www.cna.com.tw/', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {
                let $ = cheerio.load(body);
                let title = $('.slide_box > #banner-slide > .bjqs > li:first-child a').attr('title');
                let url = $('.slide_box > #banner-slide > .bjqs > li:first-child a').attr('href');
                return Promise.resolve({
                    type: 'cna',
                    name: '中央社',
                    title: title,
                    url: url
                });
            });
    }
};