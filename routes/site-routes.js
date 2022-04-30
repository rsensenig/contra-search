const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

// ROUTES
router.route('/')
    .get(siteCtrl.index)

router.route('/about-contra')
    .get(siteCtrl.about)

router.route('/contact')
    .get(siteCtrl.contact)
    .post(siteCtrl.contact_me_message_post)

router.route('/thank-you')
    .get(siteCtrl.thank_you)

module.exports = router;