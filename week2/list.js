require('./database.js');
var mongoose = require('mongoose');
var Broodje = mongoose.model('broodje');

Broodje.find().exec(function(err, broodjes){
    broodjes.forEach(b => {
        console.log(b.naam);
        console.log(b.geheim);
        mongoose.disconnect();
    })
});