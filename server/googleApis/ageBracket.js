import Googleapis from './Googleapis';

export default function () {
    const Google = new Googleapis();

    return Google.getAuthorize()
    .then(() => {
        let params = {
            'start-date': 'yesterday',
            'end-date': 'yesterday',
            'metrics': 'ga:pageviews',
            'dimensions': 'ga:userAgeBracket',
        };
        return Google.getAnalytics(params);
    })
    .then(({ rows, totalsForAllResults }) => {
        let total = 0, value;

        let result = _.map(rows, (row) => {
            value = Math.round(row[1] / totalsForAllResults['ga:pageviews'] * 100);
            total += value;
            return {
                type: row[0],
                value,
            };
        });

        // 避免四捨五入後加總超過 100
        if ( total > 100 ) {
            result[5].value -= (total - 100);
        }

        return Promise.resolve(result);
    })
    .catch((err) => {
        return Promise.reject(err);
    });

};
