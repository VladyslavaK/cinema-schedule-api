
module.exports = ({ router }) => {
  router.route('/halls')
    .get((req, res) => res.send('ALL THESE HALLS'));
};
