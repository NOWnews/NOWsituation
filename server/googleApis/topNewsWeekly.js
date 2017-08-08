import Googleapis from './Googleapis';
import moment from 'moment-timezone';
export default function () {
    const Google = new Googleapis();

    return Google.getAuthorize()
    .then(() => {
        let params = {
            'start-date': moment().subtract(7, 'days').format('YYYY-MM-DD'),
            'end-date': moment().format("YYYY-MM-DD"),
            'metrics': 'ga:pageviews',
            'dimensions': 'ga:pageTitle',
            'sort': '-ga:pageviews',
            'max-results': 20, // 避免流量最多的是首頁(+2) & 其它頁面(+1) & 抓到機器人戳的類別
        };
        return Google.getAnalytics(params);
    })
    .then(({ rows }) => {
        let result = [], news;
        _.forEach(rows, (row) => {
            // 如果是首頁(+2) & 其他則剔除(+1) & 抓到機器人戳的類別
            if ( row[0] === 'NOWnews 今日新聞') { return ;}
            if ( row[0] === '首頁 | 行動版 | NOWnews今日新聞') { return ;}
            if ( row[0] === '(other)') { return ;}
            if ( row[0].indexOf('404頁面') > -1) { return ;}

            news = row[0].replace('| NOWnews今日新聞', '').trim();
            news = news.replace('| NOWnews 今日新聞', '').trim();
            if (news.length < 6) { return; } //避免抓到類別

            result.push(news);
        });
        return Promise.resolve(result.splice(0, 5));
    })
    .catch((err) => {
        return Promise.reject(err);
    });
};
