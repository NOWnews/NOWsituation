import fetch from 'node-fetch';


export default class pageview {

    // 建構式
    constructor() {
    }

    // 各頻道總數
    total = () => {
        return fetch('http://61.67.121.50:10012/news/total/', {
                timeout: 20000
            })
            .then((res) => {
                return res.json();
            })
            .then((body) => {

                //  pv 由大到小排序
                body.categories.sort((item1, item2) => {
                    return item2.allTotalPageViews - item1.allTotalPageViews;
                });

                return Promise.resolve(body);
            });
    }
};