// collects the packaged API routes
const router = require('express').Router();

const homeRoutes = require('./home-routes');

const apiRoutes = require('./api');

const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

// recieve a 404 error if a request is mafe to any endpoint that doesn't exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;