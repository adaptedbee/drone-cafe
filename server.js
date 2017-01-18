// modules =================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// configuration ===========================================

// parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location
app.use(express.static(__dirname + '/public'));

// set our port
const port = process.env.PORT || 1337;

// config database
var dbConfig = require('./config/db');
var dbConnectionOptions = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

// connect to our mongoDB database
mongoose.connect(dbConfig.url, dbConnectionOptions, (error, database) => {
  if (error) {
    console.log('Unable to connect to MongoDB server. Error: ', error);
  } else {
    console.log('Connected to MongoDB server');
  }
});

// model
const model = require('./app/model');

// setup router
const router = express.Router();

// routes ==================================================

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to our Drone Cafe app!' });
});

router.route('/clients')
  .get((req, res) => {
    model.Client.find((err, clients) => {
      if (err){
        res.send(err);
      } else {
        res.json(clients);
      };
    });
  });

router.route('/orders')
  .get((req, res) => {
    model.Order.find((err, clients) => {
      if (err){
        res.send(err);
      } else {
        res.json(clients);
      };
    });
  });

// start app ===============================================

// add router
app.use('/api', router);

// start our app at localhost
app.listen(port, () => {
  console.log(`Application started on port ${port}!`);
});