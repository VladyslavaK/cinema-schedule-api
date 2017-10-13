const handlers = require('./../handlers');

module.exports = ({ app, router }) => {
  app.use('/', router);
  handlers({ router });
};
