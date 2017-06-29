import { info } from '../server/news';
describe('news', () => {
    it('info', (done) => {
        info()
        .then((result) => {
            result.should.have.keys('allNewsHaedlines', 'totalPageView');
            console.log(result);
            result.allNewsHaedlines.should.have.length(6);
            result.totalPageView.should.have.keys('categories', 'allTotal');
            done();
        }, (err) => {
            done(err);
        });
    });

});

