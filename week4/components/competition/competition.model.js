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

mongoose.model('Competition', competitionSchema);

