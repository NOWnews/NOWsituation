import {
    ageBracket,
    gender,
    top3NewsWeekly,
} from '../server/googleApis';

describe('GA', () => {

    it('ageBracket', (done) => {
        ageBracket()
        .then((result) => {
            result.should.have.length(6);
            result[0].should.have.keys('type', 'value');
            result[0].type.should.be.equal("18-24");
            result[0].value.should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('gender', (done) => {
        gender()
        .then((result) => {
            result.should.have.keys('male', 'female');
            result.male.should.be.Number;
            result.female.should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('top3NewsWeekly', (done) => {
        top3NewsWeekly()
        .then((result) => {
            result.should.have.length(3);
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });
});
