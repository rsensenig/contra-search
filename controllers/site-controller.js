const inboxData = require('../data/inbox-data');
const { v4:uuid } = require('uuid');

module.exports = {
    index: (req, res) => {
        res.render('pages/index');
    },
    about: (req, res) => {
        res.render('pages/about-contra');
    },
    contact: (req, res) => {
        res.render('pages/contact');
    },
    contact_me_message_post: (req, res) => {
        const {_id = uuid(), name, message} = req.body;
        inboxData.push({_id, name, message});
        res.redirect('/');
    },
    thank_you: (req, res) => {
        res.render('pages/thank-you');
    }
}