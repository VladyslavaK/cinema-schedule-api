const mongoose = require('mongoose');

const { Schema } = mongoose;

const hallSchema = new Schema({
  name: String,
  code: Number,
  capasity: Number,
});

module.exports = mongoose.model('Halls', hallSchema);
