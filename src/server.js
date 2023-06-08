const express = require('express');
const app = express();

// Import the routes for root and /api
const rootRoutes = require('./routes/root');
const apiRoutes = require('./routes/api');

// Middleware to parse JSON request body
app.use(express.json());

// Use the routes
app.use('/', rootRoutes);
app.use('/api', apiRoutes);

// Start the server
const port = 3000; // Specify the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
