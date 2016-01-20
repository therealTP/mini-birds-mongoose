var User = require('./../models/User');

module.exports = {
  create: function(req, res) { // create new user
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      if (err) {
        res.sendStatus(500, err);
      }
      res.send(result);
    });
  },
  read: function(req, res) { // get user by id
    User.find({}, function(err, result) {
      if (err) {
        res.sendStatus(500, err);
      }
      res.send(result);
    });

  },
  update: function(req, res) { // update user by id

  },
  delete: function(req, res) { // delete user by id

  },
};
