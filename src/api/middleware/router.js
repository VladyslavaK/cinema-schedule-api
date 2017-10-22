const handlers = require('./../handlers');

module.exports = ({ app, router, models }) => {
  app.use('/', router);
  handlers({ router, models });
};
