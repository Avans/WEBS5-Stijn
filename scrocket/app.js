var express = require('express');
var bodyparser = require('body-parser');


var counter = require('./count')();
var counter = require('./count')();
var counter = require('./count')();
var counter = require('./count')();



var app = express();
app.use(bodyparser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
    res.broadcast = app.get('socketManager');
    next();
})

app.get('/', function(req, res, next){
    res.send("Welcome to scrocket");
})

app.post('/splay', function(req, res){
    var resultaat = req.body.aantalPoortjes * req.body.aantalBallen / 2;
    res.broadcast.emit('score', { name: req.body.naam, score: resultaat });
    res.json({
        score: resultaat,
        name: req.body.naam
    });
});

app.use((req, res) => res.send(404));

module.exports = app;
