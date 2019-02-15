var express = require('express');
const swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./config/swagger');
var app = express();
//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res, next) => {
    res.send('Home home home');
});
//thema = hotel tamagotchi
var router = require('./routes/kamer-routes');
app.use(router);
app.use(function (req, res, next) {
    res.send(404);
});
var port = 8000;
app.listen(port);
console.log('Listening on port: ' + port);
//bron: https://developer.okta.com/blog/2018/11/15/node-express-typescript
//# sourceMappingURL=app.js.map