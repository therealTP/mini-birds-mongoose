var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

// import internal modules
var sightingsCtrl = require('./controllers/sightingsCtrl');
var usersCtrl = require('./controllers/userCtrl');

// set up & run express app
var app = express();
var port = 9000;

app.listen(9000, function() {
  console.log('Listening on port', port);
});

// set up & run mongodb
var dbUri = 'mongodb://localhost:27017/sightings';
mongoose.connect(dbUri);
mongoose.connection.once('open', function() {
  console.log('mongodb running');
});

// apply app middleware

var corsOptions = {
	origin: 'http://localhost/' + port
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/sightings', sightingsCtrl.read);
app.post('/sightings', sightingsCtrl.create);
app.get('/users', usersCtrl.read);
app.post('/users', usersCtrl.create);
