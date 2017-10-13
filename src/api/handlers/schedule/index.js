module.exports = ({ router }) => {
  router.route('/schedule')
    .get((req, res) => res.send('NO MORE ITEMS IN MY SCHEDULE'));
};
