var mongoose = require('mongoose');

//??
var sportclubSchema = mongoose.Schema({
    name: { type: String },
    location: { 
        long: { type: String },
        lat: { type: String} 
    },
    sponsors: [
        { name: { type: String }}
    ]
}) 

mongoose.model('Sportclub', sportclubSchema);

