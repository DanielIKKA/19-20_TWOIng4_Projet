const mongoose = require("mongoose");
const db = require('../database');

var ObjectId = mongoose.Schema.Types.ObjectId;

const sensorSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true,
        },
        creationDate: {
            type: Date,
            default: Date.now
        },
        userID: {
            type: ObjectId,
            required: true
        }
    }
);

module.exports = db.model('Sensor', sensorSchema, 'sensor');