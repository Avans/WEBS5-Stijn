
var express = require('express'); 
var mongoose = require('mongoose');
var Sportclub = mongoose.model('Sportclub');

var router = express.Router();

//get
router.get('/', (req, res) => {
    Sportclub.find().exec((err, sportclubs) => {
        res.send(sportclubs);
    })
})
//post
router.post('/', (req, res) => {
    console.log('test');
    console.log(req.body);
    
    var sc = new Sportclub(req.body);
    sc.save((err, sportclub) => {
        if(err) res.send(500);
        else res.send(200);
    })
})

//get
//put
//delete

module.exports = router;
