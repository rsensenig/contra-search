const Event = require('../models/event-model');
const {Client} = require("@googlemaps/google-maps-services-js");
const moment = require('moment');

module.exports = {
    event_results_get: (req, res) => {
        const client = new Client({});

        client
        .geocode({
            params: {
            address: req.query.zipCode,
            key: process.env.GOOGLE_API_KEY,
            },
            timeout: 1000, // milliseconds
        })
        .then((response) => {
            const location = response.data.results[0].geometry.location;
            const METERS_PER_MILE = 1609.34;
            Event.find({ 
                needsReview: {$ne: true},
                location: { 
                $nearSphere: { 
                    $geometry: { 
                        type: "Point", 
                        coordinates: [ location.lng, location.lat ] 
                    }, 
                    $maxDistance: 5 * METERS_PER_MILE 
                } 
            } },
            (error, allEvents) => {
                if(error) {
                    console.log(error);
                    return error;
                } else {
                    res.render('pages/results', {
                        eventsArray: allEvents,
                        location: location,
                        moment: moment,
                        zipCode: req.query.zipCode
                    });
                }
            });
            
        })
        .catch((error) => {
            console.log(`Google came back with this error: ${error}`);
            // TO DO: render results page with error message
        });
    },
    event_detail_get: (req, res) => {
        let {_id} = req.params;
        Event.findOne({_id: _id}, (error, foundEvent) => {
            if(error) {
                return error;
            } else {
                res.render('pages/event-detail', {
                    foundEvent: foundEvent,
                    moment: moment
                });
            }
        });
    },
    event_submit_get: (req, res) => {
        res.render('pages/submit-event');
    },
    event_submit_post: (req, res) => {
        const {title, organization, street, city, state, zipCode, startDatetime, endDatetime, description, website} = req.body;
        
        const newEvent = new Event ({
            title: title,
            organization: organization,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            startDatetime: startDatetime,
            endDatetime: endDatetime,
            description: description,
            website: website,
            needsReview: true,
            location: {
                coordinates: [-70.34367376995942, 41.9366941692556] //Default pin location: in the middle of Cape Cod Bay
            }
        });

        newEvent.save();

        // get lat and lng from google  and address
        const client = new Client({});

        client
        .geocode({
            params: {
                address: newEvent.street.concat(" ",newEvent.city, " ",newEvent.state," ", newEvent.zipCode),
                key: process.env.GOOGLE_API_KEY,
                timeout: 1000, //milliseconds
            }
        })
        .then((response) => {
            const location = response.data.results[0].geometry.location;
            const {_id} = newEvent._id;
            Event.findByIdAndUpdate(_id, {$set: {
                location: {
                    type: "Point", 
                    coordinates: [ location.lng, location.lat ]
                }
            }}, {new: true}, error => {
                if(error) {
                    return error;
                } else {
                    res.redirect('/thank-you');
                }
            })
        })
        .catch((error) => {
            console.log(`Google came back with this error: ${error}`);
        });
    },
    event_create_post: (req, res) => {
        const {title, organization, street, city, state, zipCode, startDatetime, endDatetime, description, website} = req.body;
        const newEvent = new Event ({
            title: title,
            organization: organization,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            startDatetime: startDatetime,
            endDatetime: endDatetime,
            description: description,
            website: website,
            needsReview: false,
            location: {
                coordinates: [-70.34367376995942, 41.9366941692556] //Default pin location: in the middle of Cape Cod Bay
            }
        });

        newEvent.save();

        // get lat and lng from google and address
        const client = new Client({});

        client
        .geocode({
            params: {
                address: newEvent.street.concat(" ",newEvent.city, " ",newEvent.state," ", newEvent.zipCode),
                key: process.env.GOOGLE_API_KEY,
                timeout: 1000, //milliseconds
            }
        })
        .then((response) => {
            const location = response.data.results[0].geometry.location;
            const {_id} = newEvent._id;
            Event.findByIdAndUpdate(_id, {$set: {
                location: {
                    type: "Point", 
                    coordinates: [ location.lng, location.lat ]
                }
            }}, {new: true}, error => {
                if(error) {
                    return error;
                } else {
                    res.redirect('/admin');
                }
            })
        })
        .catch((error) => {
            console.log(`Google came back with this error: ${error}`);
        });
    },
    event_update_put: (req, res) => {
        const {_id} = req.params;
        const {title, organization, street, city, state, zipCode, startDatetime, endDatetime, description, website, needsReview} = req.body;
        Event.findByIdAndUpdate(_id, {$set: {
            title: title,
            organization: organization,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            startDatetime: startDatetime,
            endDatetime: endDatetime,
            description: description,
            website: website,
            needsReview: (needsReview=="on")
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin');
            }
        });
    }
}