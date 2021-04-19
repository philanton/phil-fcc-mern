const router = require('express').Router();
const shortenerController = require('../controllers/shortenerController');


router.route('/')
      .post(shortenerController.validateUrl)
      .post(shortenerController.checkOriginalUrl)
      .post(shortenerController.createShortener);

router.route('/:uuid')
      .get(shortenerController.findOneByShortUrl);

module.exports = router;
