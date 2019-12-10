const mongoose = require("mongoose");
const db = require('../database');
const Sensor = require('./sensorSchema');

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

userSchema.pre('findOneAndRemove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    Sensor.remove({userID : this._conditions._id}).exec();
    next();
});

module.exports = db.model('User', userSchema,'user');