
var express = require('express'); 
var mongoose = require('mongoose');
var Competition = mongoose.model('Competition');

var router = express.Router();

//get
router.get('/', (req, res) => {
    Competition.find().exec((err, comps) => {
        res.send(comps);
    })
})
//post
router.post('/', (req, res) => {
    console.log(req.body);
    
    var sc = new Competition(req.body);
    sc.save((err, comp) => {
        if(err) res.send(500);
        else res.send(200);
    })
})

//get
//put
//delete

module.exports = router;
