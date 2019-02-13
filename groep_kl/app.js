var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

//hbs
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
 
const options = {
    definition: {
      openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
      info: {
        title: 'Groep KL', // Title (required)
        version: '1.0.0', // Version (required)
      },
    },
    // Path to the API docs
    apis: ['./routes/*.js'],
  };

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


var userRoutes = require('./routes/user-routes');
var dinoRoutes = require('./routes/dino-routes');

app.use((req, res, next) => {
    console.log('Incoming');
    next();
})

app.use(userRoutes);
app.use(dinoRoutes);


app.get('/', function(req, res, next){
    res.render('home');
})

app.use(function(feq, res, next){
    res.send(404);
})

var port = 8083;
app.listen(port);
console.log('listening on ' + port);
