import news from '../server/news';
describe('news', () => {
    it('index', (done) => {
        news()
        .then((result) => {
            result.should.have.keys('headlines');
            console.log(result);
            result.headlines.should.have.length(6);
            done();
        }, (err) => {
            done(err);
        });
    });

});

