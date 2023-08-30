const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Import the generated swagger spec
const dotenv = require('dotenv');
const routes = require('./routes');
const app = express();

dotenv.config();
// const PORT = process.env.PORT || 5000;
const PORT =  5000;

app.use(bodyParser.json());

app.use('/', routes);

// Serve Swagger documentation using Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
