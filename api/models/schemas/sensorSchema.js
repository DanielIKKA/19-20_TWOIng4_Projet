const mongoose = require("mongoose");
const db = require('../database');

const Measure = require('./measureSchema');

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

sensorSchema.pre('findOneAndRemove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    console.log("SALUT JE PASSE PAR LA ");
    Measure.deleteMany({sensorID : this._conditions._id}).exec();
    next();
});


sensorSchema.pre('deleteMany', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    console.log("SALUT JE PASSE PAR ICI ");
    Measure.deleteMany({sensorID : this._conditions._id}).exec();
    next();
});
module.exports = db.model('Sensor', sensorSchema, 'sensor');