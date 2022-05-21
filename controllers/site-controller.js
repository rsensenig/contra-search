const Message = require('../models/message-model');
const passport = require('passport');

module.exports = {
    index_get: (req, res) => {
        res.render('pages/index');
    },
    about_get: (req, res) => {
        res.render('pages/about-contra');
    },
    contact_get: (req, res) => {
        res.render('pages/contact');
    },
    contact_me_message_post: (req, res) => {
        const {name, message} = req.body;
        const newMessage = new Message ({
            name: name,
            message: message
        });

        newMessage.save();

        res.redirect('/');
    },
    thank_you: (req, res) => {
        res.render('pages/thank-you');
    },
    login_get: (req, res) => {
        res.render('pages/login');
    },
    login_post: (req, res) => {
        const {username, password} = req.body;
        const user = new User ({
            username: username,
            password: password
        })
        req.login(user, (error) => {
            if(error) {
                console.log(`The error at login is: ${error}`);
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin-console');
                });
            }
        });
    },
    logout_get: (req, res) => {
        req.logout();
        res.redirect('/');
    }
}