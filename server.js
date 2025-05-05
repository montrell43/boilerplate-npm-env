'use strict';

const app = require('./myApp');  // Importing the app from myApp.js
const http = require('http');


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});


