// grab the mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our Order model
const OrderSchema = new Schema({
  userId: mongoose.Schema.ObjectId,
  dishes: [{
    dishId: mongoose.Schema.ObjectId,
    status: String
  }]
});

const Order = mongoose.model('Order', OrderSchema, 'orders');

// module.exports allows us to pass this to other files when it is called
module.exports = {
  Order
};