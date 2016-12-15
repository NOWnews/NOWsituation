import admin from '../lib/admin';
import rank from '../lib/rank';
import co from 'co';

describe.skip('news', () => {
    describe('yield - single', () => {

        it('co', (done) => {

            const Admin = new admin();
            const Rank = new rank();
            co(function* () {
                let alexa =  yield Rank.alexa();
                let adminApi = yield Admin.api();
                console.log(alexa, 'alex');
                console.log(adminApi, 'adminApi');
            }).then(function (value) {
                done();
            }, function (err) {
                done(err);
            });
        });

        it('co.wrap', (done) => {
            const Admin = new admin();
            const Rank = new rank();
            var fn = co.wrap(function* () {
                let alexa = yield Rank.alexa();
                let adminApi = yield Admin.api();
                console.log(alexa, 'alex');
                console.log(adminApi, 'adminApi');
            });
            return fn(true)
            .then((val) =>{
                done()
            }).catch((err)=>{
                done(err)
            });
        });
    });
    describe('yield - multi', () => {

        it('co', (done) => {

            const Admin = new admin();
            const Rank = new rank();
            co(function* () {
                let result =  [
                    yield Rank.alexa(),
                    yield Admin.api()
                ]
                console.log(result, 'result');
            }).then(function (value) {
                done();
            }, function (err) {
                done(err);
            });
        });

        it('co.wrap', (done) => {
            const Admin = new admin();
            const Rank = new rank();
            var fn = co.wrap(function* () {
                let result =  [
                    yield Rank.alexa(),
                    yield Admin.api()
                ]
                console.log(result, 'result');
            });
            return fn(true)
            .then((val) =>{
                done()
            }).catch((err)=>{
                done(err)
            });
        });
    });
});

