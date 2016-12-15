import Googleapis from './Googleapis';

export default function () {
    const Google = new Googleapis();

    return Google.getAuthorize()
    .then(() => {
        let params = {
            'metrics': 'rt:activeUsers',
            'dimensions': 'rt:deviceCategory',
            'sort': '-rt:activeUsers',
        };
        return Google.getRealtime(params);
    })
    .then(({ rows }) => {
        let result = {};
        _.forEach(rows, (row) => {
            result[_.camelCase(row[0])] = row[1];
            return;
        });
        return Promise.resolve(result);
    })
    .catch((err) => {
        return Promise.reject(err);
    });
};
