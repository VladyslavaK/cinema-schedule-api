const mongoose = require('mongoose');

const { Schema } = mongoose;

const filmSchema = new Schema({
  title: String,
  director: String,
  description: String,
  duration: Number,
  expirationDate: Date,
});

module.exports = mongoose.model('Films', filmSchema);
