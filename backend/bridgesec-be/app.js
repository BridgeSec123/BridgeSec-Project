// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const logger = require('./utils/logger');
const { connectDB } = require('./db_config/mongo');
//const fetch = require('node-fetch');

const app = express(); 

app.use(cors({
  origin: 'http://localhost:3000', // Replace with the React app’s URL
  //origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  //allowedHeaders: '*',
  credentials: true // Enable to allow cookies and authorization headers
}));
// app.use(cors({
//   origin: ['http://localhost:3000','*'], // Replace with your React app’s URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization', 'Timezone'], // Headers allowed
//   credentials: true // Enable to allow cookies and authorization headers
// }));
// Middleware
app.use(bodyParser.json());

// Proxy middleware for Okta API
// app.use('/sign-out', async (req, res) => {
//   console.log("proxy called");
  
//   const url = 'https://sivajioieciam.oktapreview.com/api/v1/sessions/me';
//   const oktaTokenStorage = localStorage.getItem('okta-token-storage');
//   const token=JSON.parse(oktaTokenStorage);
//   try {
//     const response = await fetch(url, {
//       method: req.method,
//       headers: {
//         ...req.headers,
//         'Authorization': `Bearer ${token?.accessToken}`, // Add token if needed
//       },
//       mode:'no-cors',
//     });
//     const data = await response.json();
//     res.status(response.status).json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });




// Routes
app.use('/users', userRoutes);
app.use('/dashboard', dashboardRoutes);

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



