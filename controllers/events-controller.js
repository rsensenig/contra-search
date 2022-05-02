const eventsData = require('../data/events-data');
const { v4:uuid } = require('uuid');

module.exports = {
    search_events_post: (req,res) => {
        // eventually put in parameters in here?
        // eventually store events that you find based on zipcode in a variable here?
        res.redirect('pages/results');
    },
    events_results: (req, res) => {
        // eventually put in parameters in here?
        // eventually store events that you find based on zipcode in a variable here?
        res.render('pages/results');
        // put in data here for search results
    },
    event_detail: (req, res) => {
        let id = req.params._id;
        const foundEvent = eventsData.find(event => event._id === String(id));
        res.render('pages/event-detail', {
            foundEvent: foundEvent
        });
    },
    event_submit: (req, res) => {
        res.render('pages/submit-event');
    },
    event_submit_post: (req, res) => {
        const {_id = uuid(), title, organization, street, city, state, zipCode, month, startDay, endDay, year, startTime, endTime, description, website, needsReview = true} = req.body;
        eventsData.push({_id, title, organization, street, city, state, zipCode, month, startDay, endDay, year, startTime, endTime, description, website, needsReview});
        res.redirect('/thank-you');
    },
    event_create_post: (req, res) => {
        const {_id = uuid(), title, organization, street, city, state, zipCode, month, startDay, endDay, year, startTime, endTime, description, website, needsReview = false} = req.body;
        eventsData.push({_id, title, organization, street, city, state, zipCode, month, startDay, endDay, year, startTime, endTime, description, website, needsReview});
        res.redirect('/admin');
    },
    event_update_put: (req, res) => {
        const {_id} = req.params;
        const {title, organization, street, city, state, zipCode, month, startDay, endDay, year, startTime, endTime, description, website} = req.body;
        const foundEvent = eventsData.find(event => event._id === _id);
        foundEvent.title = title;
        foundEvent.organization = organization;
        foundEvent.street = street;
        foundEvent.city = city;
        foundEvent.state = state;
        foundEvent.zipCode = zipCode;
        foundEvent.month = month;
        foundEvent.startDay = startDay;
        foundEvent.endDay = endDay;
        foundEvent.year = year;
        foundEvent.startTime = startTime;
        foundEvent.endTime = endTime;
        foundEvent.description = description;
        foundEvent.website = website;
        res.redirect('/admin');
    }
}