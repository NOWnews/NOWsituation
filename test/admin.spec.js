import admin from '../server/admin';
let Admin;

// 跑這個 test 要先執行 npm run dev:server
describe.skip('admin', () => {
    before(() => {
        Admin = new admin();
    });
    it('api', (done) => {
        Admin.getApi()
        .then((result) => {
            // console.log(result);
            result.should.be.Object;
            result.annoucneMessages.should.be.String;
            result.year.should.be.String;
            result.month.should.be.String;

            result.achievementRate.should.be.Array().and.length(6);
            result.achievementRate[0].should.have.keys('type', 'name', 'year', 'month', 'thisYearAR', 'thisMonthAR', 'nextMonthAR');

            result.topSales.should.be.Object;
            result.topSales.should.have.keys('top1', 'top2', 'top3');
            result.topSales.top1.should.have.keys('name', 'img');

            result.backSeatSales.should.be.Object;
            result.backSeatSales.should.have.keys('back1', 'back2', 'back3');
            result.backSeatSales.back1.should.be.String;

            result.fans.should.be.Object;
            result.fans.should.have.keys('line', 'facebook', 'weibo');
            result.fans.line.should.be.Number;

            done();
        }, (err) => {
            done(err);
        });
    });

});

