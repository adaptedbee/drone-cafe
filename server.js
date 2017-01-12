// modules =================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// configuration ===========================================

// config files
var db = require('./config/db');

// set our port
const port = process.env.PORT || 1337;

// connect to our mongoDB database
// mongoose.connect(db.url);

// parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// start our app at http://localhost:1337 and shoutout to the user
app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});

// expose app
// exports = module.exports = app;
module.exports = {
  app
};