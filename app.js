// importing the modules
const express = require('express');
const dotenv = require('dotenv');

// Importing the database connection file
const dbConnection = require('./config/database');

// Importing the routes
const transactionRoutes = require('./routes/transactions');

// getting the environment variables file
dotenv.config({ path: './config/.env' });

// connecting to the db
dbConnection();

// initializing the app
const app = express();

// setting bodyparser middleware
app.use(express.json());

// Using transaction routes
app.use('/api/v1/transactions', transactionRoutes);

// Setting up the port number
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log(`App running in ${process.env.NODE_ENV} on port ${PORT}`));