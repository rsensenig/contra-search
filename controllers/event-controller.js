const Event = require('../models/event-model');
const {Client} = require("@googlemaps/google-maps-services-js");
const moment = require('moment');
const { RRule } = require('rrule');

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
                    console.log(`Database came back with an error: ${error}.`);
                    res.render('pages/results', {
                        eventsArray: [],
                        location: location,
                        moment: moment,
                        zipCode: req.query.zipCode,
                        error: error,
                    });
                } else {
                    res.render('pages/results', {
                        eventsArray: allEvents,
                        location: location,
                        moment: moment,
                        zipCode: req.query.zipCode,
                        error: undefined,
                    });
                }
            });
            
        })
        .catch((error) => {
            console.log(`Google came back with this error: ${error}`);
            res.render('pages/results', {
                eventsArray: [],
                location: {lat:0, lng:0},
                moment: moment,
                zipCode: req.query.zipCode,
                error: "I didn't understand that zip code. Please enter a different one.",
            });
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
    },
    recurring_event_create_post: (req, res) => {
        const {title, organization, street, city, state, zipCode, frequency, startDatetime, endDatetime, interval, weekStart, byWeekday, description, website} = req.body;
        console.log('information from form:', req.body);

        // store all the months of the year in a variable
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

        // Create a rule:
        const rule = new RRule({
            freq: frequency,
            dtstart: new Date(startDatetime),
            until: new Date(endDatetime),
            interval: parseInt(req.body.interval),
            wkst: weekStart,
            byweekday: byWeekday,
            bymonth: months.map(month => parseInt(req.body[month])).filter(Number)
        });

        // create an object that contains the recurring data that stays constant
        const recurringData = {
            title: title,
            organization: organization,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            description: description,
            website: website,
            needsReview: false,
            location: {
                coordinates: [-70.34367376995942, 41.9366941692556] //Default pin location: in the middle of Cape Cod Bay
            }
        };

        // Looping through all the dates in the recurring event series rule
        for (const date of rule.all()) {
            //create new event and pass in recurring data that stays constant
            const newEvent = new Event(recurringData);
            newEvent.startDatetime = date;
            newEvent.endDatetime = date.setHours(date.getHours() + 3);
            console.log('newEvent: ', newEvent);

            newEvent.save();
        }

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
}