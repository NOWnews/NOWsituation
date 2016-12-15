import cheerio from 'cheerio';
import fetch from 'node-fetch';

export default class headline {

    // 建構式
    constructor() {
    }

    // Alexa
    alexa = () => {
        return fetch('http://www.alexa.com/siteinfo/nownews.com', {
                timeout: 5000
            })
            .then((res) => {
                return res.text();
            })
            .then((body) => {

                let $ = cheerio.load(body);
                let globlaRank = $('.globleRank .metrics-data').text();
                let countryRank = $('.countryRank .metrics-data').text();
                return Promise.resolve({
                    type: 'alaxa',
                    globalRank: globlaRank.trim(),
                    countryRank: countryRank.trim()
                });
            });
    }
};
