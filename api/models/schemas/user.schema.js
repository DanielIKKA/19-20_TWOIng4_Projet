const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    personsInHouse : {
        type: Int,
        required: true,
    },
    houseSize : {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('user', userSchema);