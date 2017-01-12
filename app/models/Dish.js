// grab the mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our Order model
const DishSchema = new Schema({
  title: String,
  image: String,
  rating: Number,
  ingredients: [String],
  price: Number
});

const Dish = mongoose.model('Dish', DishSchema, 'dishes');

// module.exports allows us to pass this to other files when it is called
module.exports = {
  Dish
};