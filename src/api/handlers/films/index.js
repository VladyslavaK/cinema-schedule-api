
module.exports = ({ router, models }) => {
  router.route('/films')
    .get(async (req, res) => {
      const films = await models.films.find();
      res.send(films);
    });
};
