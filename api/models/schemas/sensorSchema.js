const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true,
        }
    },{
        timestamps : 
        {
            createdAt : "creationDate"
        }
    }
    );

module.exports = mongoose.model('user', userSchema);