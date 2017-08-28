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
            '政治': 'isMainMenu',
            '財經': 'isMainMenu',
            '社會': 'isMainMenu',
            '運動': 'isMainMenu',
            '娛樂': 'isMainMenu',
            '新奇': 'isMainMenu',
            '生活': 'isMainMenu',
            '全球': 'isMainMenu',
            '地方': 'isMainMenu',
        }

        var result = [];
        _.forEach(rows, (row) => {
            var menu = row[0];
            if (definedMainMenu[menu]) {
                let index = result.length;
                result.push({name: `${index + 1}${menu}`, allTotalPageViews: row[1]});
            }
        });

        while (result.length < 10) {
            result.push({ name: '---', allTotalPageViews: 0 });
        }


        return Promise.resolve(result);
    })
    .catch((err) => {
        return Promise.reject(err);
    });

};
