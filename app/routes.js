// const express = require('express');
// const router = express.Router();
const path = require('path');

// grab the models we created
const Client = require('./models/Client');
const Order = require('./models/Order');
const Dish = require('./models/Dish');

module.exports = function(app) {

        const apiUrl = 'https://api.mlab.com/api/1/databases/drone-cafe/collections';
        const apiKey = '?apiKey=D6u9mshBv5A9himB4ncluNapteQcnSd6';

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // api routes
        app.get('/api', function (req, res) {
          res.json(200, {msg: 'OK' });
        });

        app.get('/api/clients', function(req, res) {
            Client.find((err, data) => {
                if (err) res.send(err);
                res.json(data);
            });
        });

        app.get(apiUrl + '/clients' + apiKey, (req, res) => {
            Client.find((err, data) => {
                if (err) res.send(err);
                res.json(data);
            });
        });

        app.get(apiUrl + '/orders' + apiKey, (req, res) => {
            if (req.body.status) res.json(req.body.status);
            Order.find((err, data) => {
                if (err) res.send(err);
                res.json(data);
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        // app.get('*', (req, res) => {
        //     res.sendFile(path.join(__dirname, '../public', 'index.html')); // load our public/index.html file
        // });

};