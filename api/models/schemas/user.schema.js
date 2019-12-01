const mongoose = require("mongoose");
const db = require('../database');

const userSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    personsInHouse : {
        type: Number,
        required: true,
    },
    houseSize : {
        type: String,
        required: true,
    }
});

module.exports = db.model('User', userSchema,'user');