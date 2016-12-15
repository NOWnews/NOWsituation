import Googleapis from './Googleapis';

export default function () {
    const Google = new Googleapis();
    const COUNTRIES = {
        'Taiwan': '台灣',
        'United States': '美國',
        'China': '中國',
        'Hong Kong': '香港',
        'Malaysia': '馬來西亞',
        'Canada': '加拿大',
        'Australia': '澳洲',
        'Japan': '日本',
        'Mexico': '墨西哥',
        'Philippines': '菲律賓',
        'Macau': '澳門',
        'South Africa': '南非',
        'Thailand': '泰國',
        'United Kingdom': '英國',
        'Vietnam': '越南',
        'Chile': '智利',
        'France': '法國',
        'Guam': '關島',
        'India': '印度',
        'Netherlands': '荷蘭',
        'New Zealand': '新西蘭',
        'Singapore': '新加坡',
        'Spain': '西班牙',
        'United Arab Emirates': '阿拉伯',
        'Germany': '德國',
        'Angola': '安格拉',
        'Brazil': '巴西',
        'Colombia': '哥倫比亞',
    }
    return Google.getAuthorize()
    .then(() => {
        let params = {
            'metrics': 'rt:activeUsers',
            'dimensions': 'rt:country',
            'sort': '-rt:activeUsers',
        };
        return Google.getRealtime(params);
    })
    .then(({ rows, totalsForAllResults }) => {
        const onlineUser = parseInt(totalsForAllResults['rt:activeUsers'], 10);
        let roundDecimal = (val, precision) => {
          return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
        }

        let result =  _.map(rows, (row) => {
            let countryName = COUNTRIES[row[0]];

            if (!countryName) {
                countryName = row[0];
            }

            row[1] = parseInt(row[1], 10);
            let percentage = row[1]/onlineUser * 100;
            return [countryName, roundDecimal(percentage, 1)];
        });
        return Promise.resolve(result);
    })
    .catch((err) => {
        return Promise.reject(err);
    });

};
