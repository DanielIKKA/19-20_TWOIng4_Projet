const mongoose = require('mongoose');

const dbName = "DashbordProject_DB";
const dbURL = `mongodb://localhost:27017/${dbName}`;

// connection
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

module.exports = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error'));

db.once('open', function() {
  console.log('You are connected to database');
});