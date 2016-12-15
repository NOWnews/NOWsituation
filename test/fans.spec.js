import fans from '../server/fans';
let Fans;
describe('fans', () => {
    before(() => {
        Fans = new fans();
    });
    it('weibo', (done) => {
        Fans.weibo()
        .then((value) => {
            value.should.be.Number;
            done();
        }, (err) => {
            done(err);
        });
    });
    it('facebook', (done) => {
        Fans.facebook()
        .then((value) => {
            console.log(value);
            value.should.be.Number;
            done();
        }, (err) => {
            done(err);
        });
    });
});

