const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "db_project";
const dbURL = `mongodb://localhost:27017/${dbName}`;

// connection
mongoose.connect(dbURL, {
    useNewUrlParser: true
});

module.exports = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error'));

db.once('open', function() {
  console.log('You are connected to database');
});