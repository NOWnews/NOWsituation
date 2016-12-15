import Googleapis from './Googleapis';

export default function () {
    const Google = new Googleapis();

    return Google.getAuthorize()
    .then(() => {
        let params = {
            'start-date': 'yesterday',
            'end-date': 'yesterday',
            'metrics': 'ga:pageviews',
            'dimensions': 'ga:userGender',
            'sort': 'ga:userGender',
        };
        return Google.getAnalytics(params);
    })
    .then(({ rows, totalsForAllResults }) => {
        let maleNum = parseInt(rows[1][1], 10);
        let maleRate = maleNum / totalsForAllResults['ga:pageviews'];
        maleRate = Math.round(maleRate * 100);
        let result = {
            male: maleRate,
            female: 100 - maleRate,
        }

        return Promise.resolve(result);
    })
    .catch((err) => {
        return Promise.reject(err);
    });

};
