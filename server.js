'use strict';

const app = require('./myApp');  // Importing the app from myApp.js
const http = require('http');


const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
  console.log("Node.js listening on port " + port);
});

