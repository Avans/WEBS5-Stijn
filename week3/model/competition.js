var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var compSchema = mongoose.Schema({
    naam: {type: String},
    
    //Manier A: Een referentie 
    //players: [{type: Schema.Types.ObjectId, ref: "Player"}], 
    
    //Manier B: Nested
    players: [
        {
            naam: {type: String},
            score: {type: Number},
            original: {type: Schema.Types.ObjectId, ref: "Player"}
        }
    ]
})

mongoose.model('Competition', compSchema);
