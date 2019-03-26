
//packages
var express = require('express');
var swaggerUi = require('swagger-ui-express');
var port     = process.env.PORT || 8001;
var mongoose = require('mongoose');
//var passport = require('passport');
var flash    = require('connect-flash');
var path = require('path');

var morgan       = require('morgan'); 
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

//config
var swaggerDocument = require('./config/swagger');
var db = require('./config/database');

//init app
var app = express();
var server = require('http').createServer(app);

//models
require('./model/user');
require('./model/kamer');


//express pipeline
app.use(express.static(path.join(__dirname, 'public'))); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
//require('./config/passport')(passport); 

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
//app.use(passport.initialize());
//app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//sockets
//require('./config/socket')(server);


//thema = hotel tamagotchi
//require('./routes/auth-routes')(app, passport);
app.use( require('./routes/kamer-routes'));

app.use(function(req, res, next){
    res.send(404);
})


server.listen(port);
console.log('Listening on port: ' + port);

//bron: https://developer.okta.com/blog/2018/11/15/node-express-typescript