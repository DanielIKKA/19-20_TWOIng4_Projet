const mongoose = require("mongoose");
const db = require('../database');

var ObjectId = mongoose.Schema.Types.ObjectId;

const measureSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },
        creationDate: {
            type: Date,
            default: Date.now
        },
        value: {
            type: Number,
            required: true,
        },
        sensorID: {
            type: ObjectId,
            required: true
        }
    }
);

module.exports = db.model('Measure', measureSchema, 'measure');