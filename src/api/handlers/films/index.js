
module.exports = ({ router, models }) => {
  router.route('/films')
    .get((req, res) => {
      models.Films.find().then(films => res.send(films));
    });

  router.route('/film')
    .post((req, res) => {
      models.Films(req.body).save()
        .catch(() => res.send('failure'))
        .then(film => res.send(film));
    });
};
