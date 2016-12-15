import Googleapis from './Googleapis';

const TRAFFIC_TYPE = {
    DIRECT: '直接',
    SOCIAL: '社交',
    ORGANIC: '自然',
    REFERRAL: '參照',
    CUSTOM: '其他'
}

export default function () {
    const Google = new Googleapis();

    return Google.getAuthorize()
    .then(() => {
        let params = {
            'metrics': 'rt:activeUsers',
            'dimensions': 'rt:trafficType',
            'sort': '-rt:activeUsers',
        };
        return Google.getRealtime(params);
    })
    .then(({ rows, totalsForAllResults }) => {
        let trafficTypes = _.map(rows, (row) => {
            return {
                type: TRAFFIC_TYPE[row[0]],
                value: row[1],
            };
        });

        let result = {
            trafficTypes,
            onlineUser: parseInt(totalsForAllResults['rt:activeUsers'], 10),
        }
        return Promise.resolve(result);
    })
    .catch((err) => {
        return Promise.reject(err);
    });

};
