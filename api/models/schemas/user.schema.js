const mongoose = require("mongoose");
const db = require('../database');

const userSchema = new mongoose.Schema({
    location: {
        type: String,
    },
    personsInHouse : {
        type: Number,
    },
    houseSize : {
        type: String,
    }
});

module.exports = db.model('User', userSchema,'user');