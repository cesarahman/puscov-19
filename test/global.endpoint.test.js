const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = require('chai').expect;

chai.use(chaiHttp);
chai.should();

describe("Global Endpoint", ()=> {
    it("in 'positif' should be have field value", (done) => {
        chai.request(server)
        .get('/global/positif')
        .end((err, res) => {
            expect(err).to.be.null;
            res.should.have.status(200);
            done();
        });
    });


    it("in 'meninggal' have property date", (done) => {
        chai.request(server)
        .get('/global/meninggal')
        .end((err, res) => {
            expect(err).to.be.null
            res.should.have.status(200);
            done();
        })
    })

});