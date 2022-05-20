const mongoose = require('mongoose');

const {Schema} = mongoose;

const eventSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A title is required.'],
        minlength: [1, 'Minimum length for the title is 1 character.']
    },
    organization: {
        type: String
    },
    street: {
        type: String,
        required: [true, 'A street is required.'],
        minlength: [1, 'Minimum length for street is 1 character.']
    },
    city: {
        type: String,
        required: [true, 'A city is required.'],
        minlength: [1, 'Minimum length for city is 1 character.']
    },
    state: {
        type: String
    },
    zipCode: {
        type: String,
        required: [true, 'A zip code is required.'],
        minlength: [1, 'Minimum length for zip code is 5 characters.']
    },
    date: {
        type: Date,
        required: [true, 'A date is required.']
    },
    startTime: {
        type: Time,
        required: [true, 'A start time is required.']
    },
    endTime: {
        type: Time,
        required: [true, 'An end time is required.']
    },
    description: {
        type: String,
        required: [true, 'A description is required, including COVID-19 precautions.']
    },
    website: {
        type: String
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;