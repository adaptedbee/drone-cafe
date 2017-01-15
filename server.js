// modules =================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const router = express.Router();

// configuration ===========================================

// config files
var db = require('./config/db');

// set our port
const port = process.env.PORT || 1337;

// connect to our mongoDB database
mongoose.connect(db.url, (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server. Error: ', err);
  } else {
    console.log('Connected to MongoDB server');
  }
});

// parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location
app.use(express.static(__dirname + '/public'));

// app.use("https://api.mlab.com/api/1/databases/drone-cafe/collections/", router);

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// start our app at http://localhost:1337 and shoutout to the user
app.listen(port, () => {
  console.log(`Application started on port ${port}!`);
});

// expose app
// exports = module.exports = app;
module.exports = {
  app
};