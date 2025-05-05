require('dotenv').config();


const express = require('express');
const path = require('path');
const app = express();

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();  
//   });
  // Continue to the next middleware or route handler


app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));

// Serve static assets
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve index.html on root route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


// Serve JSON at /json route
app.get('/json', function(req, res) {
  res.json({ message: "Hello json" });
});







module.exports = app;
