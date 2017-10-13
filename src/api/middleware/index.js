module.exports = options => [
  require('./body-parser'),
  require('./router'),
].map(factory => factory(options));
