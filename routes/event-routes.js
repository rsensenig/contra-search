const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/event-controller');

// ROUTES
router.route('/create-event')
    .post(eventCtrl.event_create_post)

router.route('/results')
    .get(eventCtrl.event_results_get)

router.route('/submit-event')
    .get(eventCtrl.event_submit_get)
    .post(eventCtrl.event_submit_post)

router.route('/:_id')
    .get(eventCtrl.event_detail_get)
    .put(eventCtrl.event_update_put)
    .delete(eventCtrl.event_delete)

module.exports = router;