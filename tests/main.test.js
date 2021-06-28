const chai = require('chai');
const dirtyChai = require('dirty-chai');
const lyricsSearcher = require('../dist/index');

chai.use(dirtyChai);

describe('lyricsSearcher("blank space", "taylor swift")', () => {
  it('should return a non-empty string', (done) => {
    lyricsSearcher('blank space', 'taylor swift')
      .then((resp) => {
        chai.expect(!!resp).to.be.true();
        return done();
      })
      .catch((e) => done(e));
  }).timeout(6000);
});
