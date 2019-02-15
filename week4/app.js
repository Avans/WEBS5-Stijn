//app

//[ ][ ][ ][ ]

//input req
//output res
//next
//[ ]
require('./config/database');
require('./model/sportclub');

var express = require('express');
var app = express();

//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes
var sportclubRoutes = require('./routes/sportclub');

app.use('/sportclub', sportclubRoutes);

app.use((req, res, next) => {
    res.send('hello world');
}); 

app.listen(8000);