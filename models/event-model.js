const mongoose = require('mongoose');
const {Client} = require("@googlemaps/google-maps-services-js");

const {Schema} = mongoose;

const eventSchema = new Schema({
    title: {
        type: String,
        required: [true, 'An event title is required.'],
        minlength: [1, 'Minimum length for the event name is 1 character.']
    },
    organization: {
        type: String,
        required: [true, 'An organization or host name is required.'],
        minlength: [1, 'Minimum length for organization is 1 character.']
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
        minlength: [5, 'Minimum length for zip code is 5 characters.']
    },
    startDatetime: {
        type: Date,
        // required: [true, 'A start date and time is required.']
    },
    endDatetime: {
        type: Date,
        // required: [true, 'An end date and time is required.']
    },
    description: {
        type: String,
    },
    website: {
        type: String
    },
    needsReview: {
        type: Boolean
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [{
            type: Number
        }]
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;