import chai from "chai";
import dirtyChai from "dirty-chai";
import shelljs from "shelljs";
import lyricsSearcher from "../src/lib/index";

chai.use(dirtyChai);

describe('lyricsSearcher("blank space", "taylor swift")', () => {
  it("should be a non-empty string", (done) => {
    lyricsSearcher("blank space", "taylor swift")
      .then((ret) => {
        chai.expect(!!ret).to.be.true();
        return done();
      })
      .catch((e) => done(e));
  });
});

describe('shelljs.exec("npm run --silent cli -- passionfruit drake", { "silent": true }).stdout.trim()', () => {
  it("should be a non-empty string", (done) => {
    const ret = shelljs
      .exec("npm run --silent cli -- passionfruit drake", { silent: true })
      .stdout.trim();

    chai.expect(!!ret).to.be.true();

    return done();
  });
});
