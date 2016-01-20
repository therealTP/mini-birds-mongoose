var Sighting = require('./../models/Sighting');

module.exports = {
  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save(function(err, result) {
      if (err) {
        res.sendStatus(500, err);
      }
      res.send(result);
    });
  },
  read: function(req, res) {
    Sighting.find({})
    .populate('user', 'email')
    .exec(function(err, result) {
      if (err) {
        res.sendStatus(500);
      }
      res.send(result);
    });
  }
};
