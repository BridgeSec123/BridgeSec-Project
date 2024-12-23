// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const logger = require('./utils/logger');
const { connectDB } = require('./db_config/mongo');

const app = express(); 

// app.use(cors({
//   //origin: 'http://localhost:3000', // Replace with the React app’s URL
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   //allowedHeaders: '*',
//   // credentials: true // Enable to allow cookies and authorization headers
// }));
app.use(cors({
  origin: '*', // Your React app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With','Timezone'], // Headers
  //credentials: true // Allow cookies and headers
}));

app.options('*', cors());


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/dashboard', dashboardRoutes);
app.get("/", (req,res)=>{
  res.send("code working")
})

// Error Handling
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'An unexpected error occurred' });
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the MongoDB database
connectDB(); 

module.exports = {app};



