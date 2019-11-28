const mongoose = require("mongoose");

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

module.exports = mongoose.model('sensor', sensorSchema);