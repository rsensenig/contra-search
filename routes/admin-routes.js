const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ROUTES
router.route('/')
    .get(adminCtrl.admin)
    .delete(adminCtrl.event_delete)

router.route('/create-event')
    .get(adminCtrl.event_create)

router.route('/inbox')
    .get(adminCtrl.inbox)

router.route('/update-event/:_id')
    .get(adminCtrl.event_update)

module.exports = router;