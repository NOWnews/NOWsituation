import {
    realtimeByCountry,
    realtimeByDeviceRate,
    realtimeByTop10News,
    realtimeByTrafficTypeAndTotal,
} from '../server/googleApis';

describe('GA:realtime', () => {

    it('ByCountry', (done) => {
        realtimeByCountry()
        .then((result) => {
            // console.log(result);
            result.should.be.Array;
            let country = result[0];
            let countryName = country[0];
            let countryActiveUsers = country[1];
            country.should.be.Array;
            countryName.should.be.String;
            countryActiveUsers.should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('ByDeviceRate', (done) => {
        realtimeByDeviceRate()
        .then((result) => {
            // console.log(result);
            result.should.have.keys('desktop', 'tablet', 'mobile');
            parseInt(result.desktop, 10).should.be.Number;
            parseInt(result.tablet, 10).should.be.Number;
            parseInt(result.mobile, 10).should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('ByTop10News', (done) => {
        realtimeByTop10News()
        .then((result) => {
            // console.log(result);
            result.should.have.length(10);
            result[0].should.be.String;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('ByTrafficTypeAndTotal', (done) => {
        realtimeByTrafficTypeAndTotal()
        .then((result) => {
            // console.log(result);
            result.should.have.keys('trafficTypes', 'onlineUser');
            result.trafficTypes.should.have.length(5);
            result.trafficTypes[0].should.have.keys('type', 'value');
            result.trafficTypes[0].type.should.be.String;
            parseInt(result.trafficTypes[0].value, 10).should.be.Number;

            result.onlineUser.should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

});
