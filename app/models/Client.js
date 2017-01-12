// grab the mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our Client model
const ClientSchema = new Schema({
  name: String,
  email: String,
  account: Number
});

const Client = mongoose.model('Client', ClientSchema, 'clients');

// module.exports allows us to pass this to other files when it is called
module.exports = {
  Client
};