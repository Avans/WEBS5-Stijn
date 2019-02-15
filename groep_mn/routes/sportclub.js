
var express = require('express'); 
var mongoose = require('mongoose');
var Sportclub = mongoose.model('Sportclub');

var router = express.Router();

/**
 * @swagger
 *
 * /sportclub:
 *   get:
 *     description: Get all the sportclubjes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
router.get('/', (req, res) => {
    Sportclub.find().exec((err, sportclubs) => {
        res.send(sportclubs);
    })
})

/**
 * @swagger
 *
 * /sportclub:
 *   post:
 *     description: Add a new sportclubje
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A new sportclub has been added
 */
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
