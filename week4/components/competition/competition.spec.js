let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let server = require('../../app.js');
var competition = require('./competition.module');


describe('Competitions', () => {

    beforeEach((done) => {
        competition.model.remove({}, (err) => done());
    }) 

    describe('/GET competitions', () => {
      
        it('it should GET all the competitions', (done) => {
            chai.request(server)
                .get('/competition')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        })
    })
})

