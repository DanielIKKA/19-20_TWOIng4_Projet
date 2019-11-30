const mongoose = require("mongoose");
const db = require('../database');

const sensorSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true,
        },
        creationDate: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = db.model('Sensor', sensorSchema, 'sensor');