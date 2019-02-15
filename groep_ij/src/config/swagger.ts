var swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
        title: 'Hello World', // Title (required)
        version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./routes/*'],
    };

    // Initialize swagger-jsdoc -> returns validated swagger spec in json format
module.exports = swaggerDocument = swaggerJSDoc(options);

