require('./database.js');
var mongoose = require('mongoose');
var Broodje = mongoose.model('broodje');

var broodjekip = new Broodje({
    naam: process.argv[2],
    lengte: process.argv[3],
    beleg: ["kip", "tomaat", "kaas", "sla", "hms"],
    geheim: 'Ik hou eigenlijk meer van een broodje sate'
})

broodjekip.save(function(err, broodje){
    if(err) console.log(err, broodje);
    console.log("broodje " + broodje.naam + " opgeslagen");
    mongoose.disconnect();
})
