
const express = require('express');
const app = express();

// Import the routes from a separate file
const routes = require('./routes/index');

// Middleware to parse JSON request body
app.use(express.json());

// Use the routes
app.use('/', routes);

// Start the server
const port = 3000; // Specify the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

