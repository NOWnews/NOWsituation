import Googleapis from './Googleapis';

export default function () {
    const Google = new Googleapis();

    return Google.getAuthorize()
    .then(() => {
        let params = {
            'start-date': 'yesterday',
            'end-date': 'yesterday',
            'metrics': 'ga:pageviews',
            'dimensions': 'ga:dimension1',
            'sort': '-ga:pageviews',
            'max-results': '30'
        };
        return Google.getAnalytics(params);
    })
    .then(({ rows, totalsForAllResults }) => {
        const definedMainMenu = {
            '娛樂': 'isMainMenu',
            '社會': 'isMainMenu',
            '生活': 'isMainMenu',
            '運動': 'isMainMenu',
            '政治': 'isMainMenu',
            '新奇': 'isMainMenu',
            '財經': 'isMainMenu',
            '全球': 'isMainMenu',
            '地方': 'isMainMenu',
            '科技': 'isMainMenu',
            '消費': 'isMainMenu',
            '趣遊': 'isMainMenu'
        }

        var result = [];
        _.forEach(rows, (row) => {
            var menu = row[0];
            if (definedMainMenu[menu]) {
                result.push({name: menu, allTotalPageViews: row[1]});
            }
        });
        return Promise.resolve(result);
    })
    .catch((err) => {
        return Promise.reject(err);
    });

};
