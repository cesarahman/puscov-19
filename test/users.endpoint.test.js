// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai')

// chai.use(chaiHttp);
// chai.should();

// describe("Users Endpoint", ()=> {
//     let token;
//         it("should be unauthorized to insert new users without token", (done) => {
//             chai.request(server)
//             .post('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//         })
//     })