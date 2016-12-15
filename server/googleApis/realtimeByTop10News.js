import Googleapis from './Googleapis';

export default function () {
    const Google = new Googleapis();

    return Google.getAuthorize()
    .then(() => {
        let params = {
            'metrics': 'rt:activeUsers',
            'dimensions': 'rt:pageTitle',
            'sort': '-rt:activeUsers',
            'max-results': 17, // 避免流量最多的是首頁(+2) & 抓到類別(+5)
        };
        return Google.getRealtime(params);
    })
    .then(({ rows }) => {
        let result = [], news;
        _.forEach(rows, (row) => {
            // 如果是首頁剔除
            if ( row[0] === 'NOWnews 今日新聞') { return ;}
            if ( row[0] === '首頁 | 行動版 | NOWnews今日新聞') { return ;}

            news = row[0].replace('| NOWnews今日新聞', '').trim();
            news = news.replace('| NOWnews 今日新聞', '').trim();
            if (news.length < 6) { return; } //避免抓到類別
            result.push(news);
        });
        return Promise.resolve(result.splice(0, 10));
    })
    .catch((err) => {
        return Promise.reject(err);
    });
};
