// collects the packaged API routes
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// recieve a 404 error if a request is mafe to any endpoint that doesn't exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;