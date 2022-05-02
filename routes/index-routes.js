const express = require('express');
const siteRouter = require('./site-routes');
const adminRouter = require('./admin-routes');
const eventsRouter = require('./events-routes');
const router = express.Router();

router.use('/', siteRouter);
// router.use('/admin', adminRouter);
router.use('/events', eventsRouter);

module.exports = router;