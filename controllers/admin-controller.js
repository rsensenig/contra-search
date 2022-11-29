const Event = require('../models/event-model');
const Message = require('../models/message-model');
const moment = require('moment');

module.exports = {
    admin_get: (req, res) => {
        if(req.isAuthenticated()) {
            Event.find({}, (error, allEvents) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/admin', {
                        eventsArray: allEvents
                    });
                }
            });
        }
    },
    event_create_get: (req, res) => {
        if(req.isAuthenticated()) {
            res.render('pages/create');
        } else {
            res.redirect('/login');
        }
    },
    inbox_get: (req, res) => {
        if(req.isAuthenticated()) {
            Message.find({}, (error, allMessages) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/inbox', {
                        messagesArray: allMessages
                    });
                }
            });
        }
    },
    inbox_message_delete: (req, res) => {
        const {_id} = req.params;
        Message.deleteOne({_id: _id}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin/inbox');
            }
        })
    },
    event_update_get: (req, res) => {
        if(req.isAuthenticated()) {
            const {_id} = req.params;
            Event.findOne({_id: _id}, (error, foundEvent) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/update', {
                        foundEvent: foundEvent,
                        moment: moment
                    });
                }
            })
        }
    },
    event_delete: (req, res) => {
        const {_id} = req.params;
        Event.deleteOne({_id: _id}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin');
            }
        })
    },
    event_approve_put: (req, res) => {
        const {_id} = req.params;
        const {title, organization, street, city, state, zipCode, startDatetime, endDatetime, description, website} = req.body;
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
            needsReview: false
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin');
            }
        });
    },
    recurring_event_create_get: (req, res) => {
        if(req.isAuthenticated()) {
            res.render('pages/create-recurring');
        } else {
            res.redirect('/login');
        }
    },
}