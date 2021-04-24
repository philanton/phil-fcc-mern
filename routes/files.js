const router = require('express').Router();
const fileController = require('../controllers/fileController');
const upload = require('express-fileupload');


router.use(upload());
router.post('/', fileController.getFileInfo);


module.exports = router;
