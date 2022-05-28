const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

// ROUTES
router.route('/')
    .get(siteCtrl.index_get)

router.route('/about-contra')
    .get(siteCtrl.about_get)

router.route('/contact')
    .get(siteCtrl.contact_get)
    .post(siteCtrl.contact_me_message_post)

router.route('/thank-you')
    .get(siteCtrl.thank_you)

router.route('/login')
    .get(siteCtrl.login_get)
    .post(siteCtrl.login_post)

router.route('/login/register')
    .post(siteCtrl.register_post)

router.route('/logout')
    .get(siteCtrl.logout_get);

module.exports = router;