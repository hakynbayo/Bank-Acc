// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Bank Account API",
      version: "1.0.0",
      description: "API for managing bank accounts",
    },
    basePath: "/",
  },
  apis: ["src/routes.js"], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
