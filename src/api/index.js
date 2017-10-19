const express = require('express');
const middlewares = require('./middleware');
const mongoose = require('mongoose');
const models = require('../models');

mongoose.Promise = global.Promise;
const dbConnect = process.env.MONGO_URL;
mongoose.connect(
  dbConnect,
  { useMongoClient: true },
);

const router = express.Router();
const app = express();
middlewares({ app, router, models });

const port = process.env.PORT || 3000;

module.exports = app;
