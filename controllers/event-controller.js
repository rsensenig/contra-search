const { modelNames } = require('mongoose');
const Event = require('../models/event-model');

module.exports = {
    search_events_post: (req,res) => {
        // eventually put in parameters in here?
        // eventually store events that you find based on zipcode in a variable here?
        res.redirect('pages/results');
    },
    events_results_get: (req, res) => {
        // eventually put in parameters in here?
        // eventually store events that you find based on zipcode in a variable here?
        res.render('pages/results');
        // put in data here for search results
    },
    event_detail_get: (req, res) => {
        let id = req.params._id;
        Event.findOne({_id: _id}, (error, foundEvent) => {
            if(error) {
                return error;
            } else {
                res.render('pages/event-detail', {
                    foundEvent: foundEvent
                });
            }
        });
    },
    event_submit_get: (req, res) => {
        res.render('pages/submit-event');
    },
    event_submit_post: (req, res) => {
        const {title, organization, street, city, state, zipCode, startDatetime, endDatetime, description, website, needsReview} = req.body;
        const newEvent = new Event ({
            title: title,
            organization: organization,
            street: street,
            city: city,
            state: state,
            zipCode: zip-code,
            startDatetime: start-date-time,
            endDatetime: end-date-time,
            description: description,
            website: website,
            needsReview: true
        });

        newEvent.save();

        res.redirect('/thank-you');
        // alternatively do not redirect, and have if statement EJS template display thank you message
    },
    event_create_post: (req, res) => {
        const {title, organization, street, city, state, zipCode, startDatetime, endDatetime, description, website, needsReview} = req.body;
        const newEvent = new Event ({
            title: title,
            organization: organization,
            street: street,
            city: city,
            state: state,
            zipCode: zip-code,
            startDatetime: start-date-time,
            endDatetime: end-date-time,
            description: description,
            website: website,
            needsReview: false
        });

        newEvent.save();

        res.redirect('/admin');
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
            zipCode: zip-code,
            startDatetime: start-date-time,
            endDatetime: end-date-time,
            description: description,
            website: website,
            needsReview: false
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin');
            }
        });
    }
}