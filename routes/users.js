const router = require('express').Router();
const userController = require('../controllers/userController');


router.route('/')
      .post(userController.checkUser)
      .post(userController.createUser)
      .get(userController.getUsers);

router.route('/:_id/exercises')
      .post(userController.findUser)
      .post(userController.addExercise)

router.route('/:_id/logs')
      .get(userController.findUser)
      .get(userController.getLogs)

module.exports = router;
