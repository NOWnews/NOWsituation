import co from 'co';
import headline from './headline';

export default function () {

    const Headline = new headline();
    let headlines = [];
    return co(function*() {

        // 各家新聞頭條
        try  {
            headlines = yield [
                Headline.ettoday(),
                Headline.appledaily(),
                Headline.ltn(),
                Headline.udn(),
                Headline.chinatimes(),
                Headline.cna()
            ];
        } catch (e) {
            console.error('各家新聞頭條', e);
        }

        return Promise.resolve({
            headlines
        });
    })
    .catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });

};
