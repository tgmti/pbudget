let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let urlbase = 'http://localhost:3005/api'
let path = '/account'

chai.use(chaiHttp);

describe('Account', () => {
    it('/GET Account', (done) => {
        chai.request(urlbase)
            .get(path)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});