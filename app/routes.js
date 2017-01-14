// const router = express.Router();
const path = require('path');

// grab the models we created
const Client = require('./models/Client');
const Order = require('./models/Order');
const Dish = require('./models/Dish');

module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        // app.get('/api/nerds', function(req, res) {
        //     // use mongoose to get all nerds in the database
        //     Nerd.find(function(err, nerds) {

        //         // if there is an error retrieving, send the error.
        //                         // nothing after res.send(err) will execute
        //         if (err)
        //             res.send(err);

        //         res.json(nerds); // return all nerds in JSON format
        //     });
        // });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../public', 'index.html')); // load our public/index.html file
        });

};

///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/*
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

router.get('/kitchen', (req, res) => {
  res.sendFile(__dirname + '/kitchen.html');
});
*/

/*
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to our app!' });
});

router.route('/users')
  .post((req, res) => {
    const user = new model.User();
    user.name = req.body.name;
    user.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'User created!' });
      }
    });
  })
  .get((req, res) => {
    model.User.find((err, users) => {
      if (err){
        res.send(err);
      } else {
        res.json(users);
      };
    });
  });

router.get('/users/stats', (req, res) => {
  res.json({ message: 'Stats' });

  //
  model.User.aggregate({
      $lookup: {
          "from" : "Todo",
          "localField" : "_id",
          "foreignField" : "user",
          "as" : "usertasks"
      }
    },
    {
      $unwind: '$usertasks'
    },
    {
      $match: {
        'usertasks.opened': false
      }
    },
    {
      $project: {
        'name': 1,
        'usertasks': 1,
        'count': {$add: [1]}
      }
    },
    {
      $group: {
        _id: '$name',
        number: {$sum: "$count"}
      }
    })
    .exec((err, users) => {
      if (err) {
        res.send(err);
      } else {
        res.json(users);
      };
    });
});

router.route('/users/:user_id')
  .get((req, res) => {
    model.User.findById(req.params.user_id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      };
    });
  })
  .put((req, res) => {
    model.User.findById(req.params.user_id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        user.name = req.body.name;
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'User updated!' });
          };
        });
      };
    });
  })
  .delete((req, res) => {
    model.User.remove({
      id: req.params.user_id
    }, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'User deleted' });
      };
    });
  });

router.route('/todos')
  .post((req, res) => {
    const todo = new model.Todo();
    todo.name = req.body.name;
    todo.opened = req.body.opened;
    todo.user = req.body.user;
    todo.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Todo created!' });
      }
    });
  })
  .get((req, res) => {
    model.Todo.find((err, todos) => {
      if (err){
        res.send(err);
      } else {
        res.json(todos);
      };
    });
  });

router.route('/todos/:todo_id')
  .get((req, res) => {
    model.Todo.findById(req.params.todo_id, (err, todo) => {
      if (err) {
        res.send(err);
      } else {
        res.json(todo);
      };
    });
  })
  .put((req, res) => {
    model.Todo.findById(req.params.todo_id, (err, todo) => {
      if (err) {
        res.send(err);
      } else {
        todo.name = req.body.name;
        todo.opened = req.body.opened;
        todo.user = req.body.user;
        todo.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Todo updated!' });
          };
        });
      };
    });
  })
  .delete((req, res) => {
    model.Todo.remove({
      id: req.params.todo_id
    }, (err, todo) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Todo deleted' });
      };
    });
  });
*/

// app.use('/api', router);