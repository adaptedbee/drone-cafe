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

    let searchQuery = {};

    if ((req.query.name !== null) && (req.query.name !== undefined)) {
      let name = req.query.name;
      searchQuery.name = name;
    };

    if ((req.query.email !== null) && (req.query.email !== undefined)) {
      let email = req.query.email;
      searchQuery.email = email;
    };

    model.Client.find(searchQuery, (err, clients) => {
      if (err){
        res.send(err);
      } else {
        res.json(clients);
      };
    });
  })
  .post((req, res) => {
    const newClient = new model.Client();
    newClient.name = req.body.name;
    newClient.email = req.body.email;
    newClient.balance = 100;
    newClient.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Client created!' });
      }
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

    let matchQuery = {
      $match: {
      }
    };

    if ((req.query.userId !== null) && (req.query.userId !== undefined)) {
      let userId = req.query.userId;
      matchQuery.$match["userId"] = mongoose.Types.ObjectId(userId);
    };

    if ((req.query.status !== null) && (req.query.status !== undefined)) {
      let status = req.query.status;

      matchQuery.$match["status"] = status;
    };

    // console.log(matchQuery);
    model.Order.aggregate({
      $lookup: {
        "from" : "dishes",
          "localField" : "dishId",
          "foreignField" : "_id",
          "as" : "dish"
      }
    },
    {
      $unwind: "$dish"
    },
    {
      $project: {
          "_id": 1,
        "userId": 1,
        "dishId": 1,
        "status": 1,
        "dishName": "$dish.title"
      }
    },
    matchQuery)
    .exec((err, orders) => {
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