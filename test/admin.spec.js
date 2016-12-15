import admin from '../server/admin';
let Admin;
// 跑這個 test 要先執行 npm run admin
describe.skip('admin', () => {
    before(() => {
        Admin = new admin();
    });
    it('api', (done) => {
        Admin.api()
        .then((result) => {
            result.should.be.Object;
            done();
        }, (err) => {
            done(err);
        });
    });

});

