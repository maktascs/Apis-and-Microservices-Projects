let UserController = require('../controllers/user')
let ExerciseController = require('../controllers/exercise')

let express = require('express');
let router = express.Router();

router.route('/new-user').post(UserController.newUser)
router.route('/add').post(ExerciseController.addExercise)
router.route('/log').get(ExerciseController.getExercises)
module.exports = router