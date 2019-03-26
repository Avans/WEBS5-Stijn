var chai = require('chai');
var expect = chai.expect;
const request = require('supertest');

var app = require('../app');
//mock socket
app.set('socketManager', { emit: function(){}})


describe('My app', function() {

    it('should work', function(){
        expect(true).to.be.true;
    })

    it('should return a score of 4 when you hit 4 paaltjes with 2 ballen', function(done){
        request(app)
            .post('/splay')
            .send({aantalBallen:  2, aantalPoortjes: 8, naam: "Linksonder"})
            .expect(200)
            .end((err, res) => {
                expect(res.body.score).to.equal(8);
                expect(res.body.name).to.equal("Linksonder");

                done();
            })

    })
})
