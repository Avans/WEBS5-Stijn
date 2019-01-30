
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mongoose2");

var broodje = new mongoose.Schema({
    naam: { type: String,  maxlength: 2},
    lengte: { type: Number, required: true},
    beleg: [ { type: String }]
});

mongoose.model('broodje', broodje);

var Broodje = mongoose.model("broodje");