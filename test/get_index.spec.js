const chai = require('chai');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

let chaiCheerio = require('chai-cheerio');
chai.use(chaiCheerio);
let should = chai.should();
let expect = chai.expect;
let $ = cheerio.load(fs.readFileSync(path.join(__dirname,'../src/public/index.html')));

describe('GET /index.html', () => {

  it('it should be background image Cancun', (done) => {
    $('.card-img-top').should.have.prop('src', 'assets/imgs/cancun.jpg');
    done();
  });

  it('it should have a quote', (done) => {
    $('.quote').should.have.text('"Me contaron y lo olvidé; lo vi y lo entendí; lo hice y lo aprendí".');
    done();
  });

  it('it should have a quote\'s author', (done) => {
    $('.author').should.have.text('Confucio');
    done();
  });

});
