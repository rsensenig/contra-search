const eventsData = require('../data/events-data');
const { v4:uuid } = require('uuid');

module.exports = {
    admin: (req, res) => {
        res.render('pages/admin');
    },
    event_delete: (req, res) => {
        // const {_id} = req.params;
        // once Event schema is created, use deleteOne method here to delete the event with the id indicated in the params
        res.redirect('/admin');
    },
    event_create: (req, res) => {
        res.render('pages/create');
    },
    inbox: (req, res) => {
        res.render('pages/inbox');
    },
    event_update: (req, res) => {
        res.render('pages/event_update');
    }
}