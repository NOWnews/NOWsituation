import co from 'co';
import headline from './headline';
import pageview from './pageview';

export default function () {

    const Headline = new headline();
    const Pageview = new pageview();
    let allNewsHaedlines = [],
        totalPageView=[];
    return co(function*() {

        // 各家新聞頭條
        try  {
            allNewsHaedlines = yield [
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

        // 新聞瀏覽數
        try {
            totalPageView = yield Pageview.total();
        } catch (e) {
            console.error('新聞瀏覽數', e);
        }

        return Promise.resolve({
            allNewsHaedlines,
            totalPageView,
        });
    })
    .catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });

};
