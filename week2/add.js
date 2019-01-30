require('./database.js');
var mongoose = require('mongoose');
var Broodje = mongoose.model('broodje');

var broodjekip = new Broodje({
    naam: process.argv[2],
    lengte: process.argv[3],
    beleg: ["kip", "tomaat", "kaas", "sla", "hms"],
    gekkegheid: 'gekke geit'
})

broodjekip.save(function(err, broodje){
    if(err) console.log(err);
    console.log("broodje kip opgeslagen");
    mongoose.disconnect();
})
