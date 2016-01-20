var mongoose = require('mongoose');

var birdSchema = mongoose.Schema({
  name: {type: String, required: true, lowercase: true},
  order: {type: String, lowercase: true, maxLength: 30},
  status: {
    type: String,
    lowercase: true,
    enum: [
      'extinct',
      'exctinct in the wild',
      'endangered',
      'near threatened',
      'least concern'
    ]
  }
});

var sightingSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
  bird: [birdSchema],
  confirmed: {type: Boolean, default: false},
  numberSeen: {type: Number, min: 1}
});

module.exports = mongoose.model('sightings', sightingSchema);
