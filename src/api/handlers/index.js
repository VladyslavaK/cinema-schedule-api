const handlers = [
  'films',
  'halls',
  'schedule',
];

module.exports = ({ router, models }) => handlers
  .forEach(handler => require(`./${handler}`)({ router, models })); //eslint-disable-line
