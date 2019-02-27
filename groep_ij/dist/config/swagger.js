var swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hotel de Botel',
            version: '1.0.0',
        },
    },
    // Path to the API docs
    apis: ['./routes/kamer-routes.ts'],
};
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerDoc = swaggerJSDoc(options);
console.log(swaggerDoc);
module.exports = swaggerDoc;
//# sourceMappingURL=swagger.js.map