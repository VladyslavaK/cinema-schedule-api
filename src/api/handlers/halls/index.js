
module.exports = ({ router, models }) => {
  router.route('/halls')
    .get((req, res) => {
      models.Halls.find().then(halls => res.send(halls));
    });

  router.route('/hall')
    .post((req, res) => {
      models.Halls(req.body).save()
        .catch(() => res.send('failure'))
        .then(hall => res.send(hall));
    });
};
