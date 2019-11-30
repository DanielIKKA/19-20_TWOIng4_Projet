const mongoose = require("mongoose");
const db = require('../database');

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
        }
    }
);

module.exports = db.model('Measure', measureSchema, 'measure');