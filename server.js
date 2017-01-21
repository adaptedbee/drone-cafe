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

// use native ES6 promises instead of mpromise
mongoose.Promise = global.Promise;

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

router.route('/clients/:client_id')
  .put((req, res) => {
    model.Client.findById(req.params.client_id, (err, client) => {
      if (err) {
        res.send(err);
      } else {
        client.balance = req.body.balance;
        client.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Client updated!' });
          };
        });
      };
    });
  });

router.route('/orders')
  .get((req, res) => {

    let searchQuery = {};

    if ((req.query.userId !== null) && (req.query.userId !== undefined)) {
      let userId = req.query.userId;
      // searchQuery.userId = mongoose.Types.ObjectId(userId);
      searchQuery.userId = userId;
      console.log(searchQuery);
    };

    if ((req.query.status !== null) && (req.query.status !== undefined)) {
      let status = req.query.status;
      searchQuery.status = status;
    };

    // {userId: mongoose.Types.ObjectId('587a7663f36d284ed58aa8f0')}
    model.Order.find(searchQuery, (err, orders) => {
      if (err){
        res.send(err);
      } else {
        res.json(orders);
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