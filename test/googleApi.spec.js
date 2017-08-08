import {
    ageBracket,
    categoryPageviews,
    gender,
    topNewsWeekly
} from '../server/googleApis';

describe('GA', () => {

    it('ageBracket', (done) => {
        ageBracket()
        .then((result) => {
            // console.log(result);
            result.should.be.Array().and.have.length(6);
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
            // console.log(result);
            result.should.have.keys('male', 'female');
            result.male.should.be.Number;
            result.female.should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('topNewsWeekly', (done) => {
        topNewsWeekly()
        .then((result) => {
            // console.log(result);
            result.should.have.length(5);
            result[0].should.be.String;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });


    it('categoryPageviews', (done) => {
        categoryPageviews()
        .then((result) => {
            // console.log(result);
            result.should.have.length(12);
            result[0].should.have.keys('name', 'allTotalPageViews');
            result[0].name.should.be.String;
            parseInt(result[0].allTotalPageViews, 10).should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });
});
