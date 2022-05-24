const Event = require('../models/event-model');

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
    event_create_get: (req, res) => {
        if(req.isAuthenticated()) {
            res.render('pages/create');
        } else {
            res.redirect('/login');
        }
    },
    inbox_get: (req, res) => {
        res.render('pages/inbox');
    },
    event_update_get: (req, res) => {
        if(req.isAuthenticated()) {
            const {_id} = req.params;
            Event.findOne({_id: _id}, (error, foundEvent) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/update', {
                        foundEvent: foundEvent
                    });
                }
            })
        }
    }
}