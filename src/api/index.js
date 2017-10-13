const express = require('express');
const middlewares = require('./middleware');

const router = express.Router();
const app = express();
middlewares({ app, router });

const port = process.env.PORT || 3000;

module.exports = app;
