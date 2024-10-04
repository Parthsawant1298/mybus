const mongoose = require('mongoose');

const fromSchema = new mongoose.Schema({
    origin: {
        type: String
    },
    destination: {
        type: String
    },
    departureDate: {
        type: String
    },
    returnDate: {
        type: String
    },
    passengers: {
        type: Number
    },
    acPreference: {
        type: String,
        enum: ['ac', 'non-ac']
    },
    phone:{
        type: String
    }
});

const From = mongoose.model('From', fromSchema);

module.exports = From;
