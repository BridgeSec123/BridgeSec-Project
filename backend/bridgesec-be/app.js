// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const logger = require('./utils/logger');
const { connectDB } = require('./db_config/mongo');

const app = express(); 

// CORS Configuration
app.use(cors({
  origin: 'https://bridge-sec-project-frontend.vercel.app/', // Your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Timezone','application/json', "*"], // Specify allowed headers
  credentials: true // Allow credentials (cookies, authorization headers)
}));

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/dashboard', dashboardRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Code working");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'An unexpected error occurred' });
});

// Connect to the MongoDB database
connectDB(); 

module.exports = { app };
