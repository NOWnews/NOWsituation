import news from '../server/news';
describe('news', () => {
    it('index', (done) => {
        news()
        .then((result) => {
            // console.log(result);
            result.should.have.keys('headlines');
            result.headlines.should.have.length(6);
            result.headlines[0].should.have.keys('type', 'name', 'title', 'url');
            done();
        }, (err) => {
            done(err);
        });
    });

});

