
module.exports = ({ router }) => {
  router.route('/films')
    .get((req, res) => res.send('ALL THESE FILMS'));
};
