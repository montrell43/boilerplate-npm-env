require('dotenv').config();


const express = require('express');
const path = require('path');
const app = express();

// Serve favicon.ico from the 'public' folder
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));

// Serve static assets
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve index.html on root route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve JSON at /json route
app.get('/json', function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
});


module.exports = app;
