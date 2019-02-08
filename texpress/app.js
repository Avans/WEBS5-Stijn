var express = require('express');
var hbs = require('express-hbs');

var app = express();


app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(function(req, res, next){
    console.log("Getting a request on:" + req.url);
    req.dosomethingawesome = function()
    {
        console.log("something awesome");
    }
    next();
})

console.log("A");


app.get('/', (req, res) => {
    res.end("hello Stijn");
});

console.log("B");

app.get('/autos', (req, res, next) => {
    req.dosomethingawesome();
    res.render('autos', 
    { 
        autos: 
    [
        { name: "Mercedes", motor: "v8"},
        { name: "Fiat", motor: "v8"},
        { name: "Gravedigger", motor: "v9"},

    ]});
})

app.get('/autos', (req, res) => {
    console.log("Mag ik ook nog?");
    res.end("er zijn hier geen autos meer");
});

app.use(function(req, res, next){
    console.log(req);
    res.send(404);
})

console.log("C");


var port = 8000;
app.listen(port);
console.log('Listening on port: ' + port);

//bron: https://developer.okta.com/blog/2018/11/15/node-express-typescript