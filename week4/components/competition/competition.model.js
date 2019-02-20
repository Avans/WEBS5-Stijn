var mongoose = require('mongoose');

//??
var competitionSchema = mongoose.Schema({
    name: { type: String },
    location: { 
        long: { type: String },
        lat: { type: String} 
    },
    participants: [
        { name: { type: String }}
    ]
}) 

if(!mongoose.model('Competition'))
    mongoose.model('Competition', competitionSchema);

module.exports = mongoose.model('Competition');

