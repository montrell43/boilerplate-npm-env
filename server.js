'use strict';

// const bGround = require('fcc-express-bground');
const myApp = require('./myApp');
// const express = require('express');
const app = myApp;
const http = require('http');


if (!process.env.DISABLE_XORIGIN) {
  app.use((req, res, next) => {
    const allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    const origin = req.headers.origin || '*';
    if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
         console.log(origin);
         res.setHeader('Access-Control-Allow-Origin', origin);
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
}


const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
  console.log("Node.js listening on port " + port);
});


