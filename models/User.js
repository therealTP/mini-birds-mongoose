var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: {type: String, required: true},
  username: {type: String, required: true},
  level: {type: Number, max: 100},
  location: {type: String},
  member: {type: Boolean, default: false},
  updatedAt: {type: Date}
});

userSchema.pre('save', function(next) {
  var user = this;
  user.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('users', userSchema);
