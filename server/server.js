require('dotenv').config();
const express= require('express');
const app = express();

// Destructure env file.
const {SERVER_PORT} = process.env;

// Connect to Database.
// use massive

// Middleware import.
const bodyParser= require('body-parser');

// Top Level Middleware.
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

// Controller imports.
const test_controller = require('./controllers/test_controller');

// Endpoints.
app.get('/api/test', test_controller.get)

// Run Server.
app.listen(SERVER_PORT, ()=>console.log(`stranger on port: ${SERVER_PORT}`))