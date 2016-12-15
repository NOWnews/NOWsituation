import rank from '../server/rank';
let Rank;

describe('rank', () => {
    before(() => {
        Rank = new rank();
    });
    it('alexa', (done) => {
        Rank.alexa()
        .then((result) => {
            // console.log(result);
            result.should.be.Object;
            result.should.have.keys('type', 'globalRank', 'countryRank');
            result.type.should.be.equal('alexa');
            result.globalRank.should.be.Number;
            result.countryRank.should.be.Number;
            done();
        }, (err) => {
            done(err);
        });
    });

});

