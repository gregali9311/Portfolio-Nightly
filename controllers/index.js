const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// const cardpage = require('./cardpage.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// router.use('/cards', cardpage);
// router.use('/', apiRoutes);

module.exports = router;