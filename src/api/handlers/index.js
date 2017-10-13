const handlers = [
  'films',
  'halls',
  'schedule',
];

module.exports = ({ router }) => handlers
  .forEach(handler => require(`./${handler}`)({ router })); //eslint-disable-line
