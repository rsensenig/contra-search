const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ROUTES
router.route('/')
    .get(adminCtrl.admin_get)
    .delete(adminCtrl.event_delete)

router.route('/create-event')
    .get(adminCtrl.event_create_get)

router.route('/inbox')
    .get(adminCtrl.inbox_get)

router.route('/update-event/:_id')
    .get(adminCtrl.event_update_get)

module.exports = router;