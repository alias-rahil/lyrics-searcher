import chai from "chai";
import dirtyChai from "dirty-chai";
import lyricsSearcher from "../dist/index";

chai.use(dirtyChai);

describe('lyricsSearcher("blank space", "taylor swift")', () => {
  it("should return a non-empty string", (done) => {
    lyricsSearcher("blank space", "taylor swift")
      .then((resp) => {
        chai.expect(!!resp).to.be.true();
        return done();
      })
      .catch((e) => done(e));
  }).timeout(6000);
});
