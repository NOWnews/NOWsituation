import {
    realtimeByCountry,
    realtimeByDeviceRate,
    realtimeByTop10News,
    realtimeByTrafficTypeAndTotal,
} from '../lib/googleApis';

describe('GA:realtime', () => {

    it('ByCountry', (done) => {
        realtimeByCountry()
        .then((result) => {
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
            result.should.have.keys('desktop', 'tablet', 'mobile');
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('ByTop10News', (done) => {
        realtimeByTop10News()
        .then((result) => {
            result.should.have.length(10);
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

    it('ByTrafficTypeAndTotal', (done) => {
        realtimeByTrafficTypeAndTotal()
        .then((result) => {
            result.should.have.keys('trafficTypes', 'onlineUser');
            result.trafficTypes.should.have.length(5);
            result.trafficTypes[0].should.have.keys('type', 'value');
            result.onlineUser.should.be.Number;
            return done();
        })
        .catch((err) => {
            return done(err);
        })
    });

});
