module.exports = options => [
  require('./body-parser'),
  require('./router'),
  require('./errors'),
].map(factory => factory(options));
