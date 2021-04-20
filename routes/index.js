const router = require('express').Router();
const shortenerRoutes = require('./shorteners');
const userRoutes = require('./users');
const path = require('path');

router.use('/api/shorturl', shortenerRoutes);
router.use('/api/users', userRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
