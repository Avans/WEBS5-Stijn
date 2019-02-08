//connect
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/battletime')

//models
require('./model/competition');
require('./model/player');
var Comp = mongoose.model('Competition');
var Player = mongoose.model('Player');

var http = require('http');

http.createServer(function(request, response){

    //add
    if(request.url == '/addcompetition'){
        addCompetition(request, response);
    }
    else  if(request.url == '/addplayer'){
        addPlayer(request, response);
    }
    //list
    else
        list(request, response);
 
   
}).listen(1337);

function addCompetition(request, response)
{
    var comp = new Comp();
    comp.naam = "new Comp";
    comp.save((err, johnsaved) => response.end("added new comp"));
}


function addPlayer(request, response)
{
    var player = new Player();
    player.naam = "new Player";
    player.save((err, player) => response.end("added new player"));
}

function list(request, response)
{
    Comp
        .find()
        .populate('players')
        .exec((err, amerikanen) => {
            console.log(err);

            if(err)
                response.end(err);
            
            response.write(JSON.stringify(amerikanen));
            response.end();
        });
}

