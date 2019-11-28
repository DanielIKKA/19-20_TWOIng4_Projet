const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "db_project";
const dbURL = `mongodb://localhost:27017/${dbName}`;

//console.log(dbURL);


// connection
mongoose.connect(dbURL, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error'));

db.once('open', function() {
  console.log('You are connected to database');
});

module.exports = db;