const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events-controller');

// ROUTES
router.route('/')
    .post(eventsCtrl.event_submit_post)
    .post(eventsCtrl.event_create_post)

router.route('/results')
    .get(eventsCtrl.events_results)
    .post(eventsCtrl.search_events_post)

router.route('/submit-event')
    .get(eventsCtrl.event_submit)

router.route('/:_id')
    .get(eventsCtrl.event_detail)
    .put(eventsCtrl.event_update_put)

module.exports = router;