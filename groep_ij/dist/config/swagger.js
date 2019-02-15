var swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    // Path to the API docs
    apis: ['./routes/*'],
};
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
module.exports = swaggerDocument = swaggerJSDoc(options);
//# sourceMappingURL=swagger.js.map