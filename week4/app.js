require('./config/database');

var express = require('express');
var app = express();

//pipeline
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//modules
var competition = require('./components/competition/competition.module');

//routes
app.use('/' + competition.url, competition.routes); 

app.use((req, res, next) => {
    res.send(404);
}); 

app.listen(8000);