
const mongoose = require('mongoose');

const models = [
  'films',
  'halls',
];

module.exports = models
  .map(model => require(`./${model}`));  //eslint-disable-line
