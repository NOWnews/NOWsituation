import Pusher from 'pusher';
import co from 'co';
import _ from 'lodash';
import moment from 'moment-timezone';
import fetch from 'node-fetch';
import config from '../config';
import * as googleApis from './googleApis';

import admin from './admin';
import rank from './rank';

import { info } from './news';
export default function pusher() {
    let cacheData = {};
    const pusher = new Pusher(config.pusher);
    const channelName = `${config.pusher.channelPrefix}sitiuationChannel`;

    const Admin = new admin();
    const Rank = new rank();

    const triggerInfo = co.wrap(function* (){
        let result = yield info();
        cacheData.allNewsHaedlines = result.allNewsHaedlines;
        cacheData.totalPageView = result.totalPageView;
        cacheData.alexa = yield Rank.alexa();
        cacheData.adminApi = yield Admin.api();
    });

    const triggerGA = co.wrap(function* (){
        let result = yield [
            googleApis.ageBracket(),
            googleApis.gender(),
            googleApis.top3NewsWeekly(),
        ];
        cacheData.ageBracket = result[0];
        cacheData.gender = result[1];
        cacheData.top3News = result[2];
    });

    const triggerRealtimeGA = co.wrap(function* (){
        let result = yield [
            googleApis.realtimeByCountry(),
            googleApis.realtimeByDeviceRate(),
            googleApis.realtimeByTop10News(),
            googleApis.realtimeByTrafficTypeAndTotal(),
        ];

        cacheData.country = result[0];
        cacheData.deviceRate = result[1];
        cacheData.top10News = result[2];
        cacheData.trafficType = result[3].trafficTypes;
        cacheData.onlineUser = result[3].onlineUser;
    });

    const sendToSlackWebhook = co.wrap(function* (){
        let { allNewsHaedlines } = cacheData;

        let textString = '';
        _.forEach(allNewsHaedlines, (headlineNews) => {
            textString += `${headlineNews.name} : <${headlineNews.url}|${headlineNews.title}>\n`;
        });

        let attachment =  [{
            color: '#0000FF',
            title: `各家新聞頭條 ${moment(Date.now()).format('YYYY-MM-DD HH:mm')}`,
            author_name: moment(Date.now()).format('YYYY-MM-DD HH:mm'),
            text: textString
        }];

        let text = JSON.stringify({attachments: attachment});

        // 各家新聞頭條送到 #other_news_healine 頻道
        fetch('https://hooks.slack.com/services/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', {
                method: 'POST',
                body: text
            });
    });

    const sendToPusher = () => {
        pusher.trigger(channelName, 'sitiuationData', cacheData);
    };

    triggerInfo();
    triggerGA();
    triggerRealtimeGA();
    setInterval(triggerInfo, 30 * 1000);
    setInterval(triggerRealtimeGA, 30 * 10 * 1000);
    setInterval(triggerGA, 12 * 60 * 60 * 1000); // 12hr 更新一次
    setInterval(sendToSlackWebhook, 120 * 1000);
    setInterval(sendToPusher, 15 * 1000);
    return;
}

