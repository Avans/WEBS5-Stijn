var mongoose = require('mongoose');


var player = mongoose.Schema({
    name: { type: String},
    level: { type: Number },
    score: { type: Number }
})


mongoose.model('Player', player);

