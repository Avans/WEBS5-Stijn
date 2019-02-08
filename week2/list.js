require('./database.js');
var mongoose = require('mongoose');
var Broodje = mongoose.model('broodje');

Broodje.find().exec(function(err, broodjes){
    broodjes.forEach(b => {
        console.log("het broodje " + b.naam + " met lengte " + b.lengte);
        console.log(b.prijzen);
        mongoose.disconnect();
    })
});