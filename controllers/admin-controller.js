const Event = require('../models/event-model');

module.exports = {
    admin_get: (req, res) => {
        if(req.isAuthenticated()) {
            Event.find({}, (error, allEvents) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/admin');
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
        res.render('pages/create');
    },
    inbox_get: (req, res) => {
        res.render('pages/inbox');
    },
    event_update_get: (req, res) => {
        res.render('pages/event_update');
    }
}