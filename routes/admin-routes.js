const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ROUTES
router.route('/')
    .get(adminCtrl.admin_get)

router.route('/create')
    .get(adminCtrl.event_create_get)

router.route('/inbox')
    .get(adminCtrl.inbox_get)

router.route('/inbox/delete-message/:_id')
    .delete(adminCtrl.inbox_message_delete)

router.route('/update/:_id')
    .get(adminCtrl.event_update_get)

router.route('/delete/:_id')
    .delete(adminCtrl.event_delete)

router.route('/approve/:_id')
    .put(adminCtrl.event_approve_put)

module.exports = router;