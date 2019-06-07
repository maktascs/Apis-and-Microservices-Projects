let urlctrl = require('../controllers/url.controller')
let express = require('express');
let router = express.Router();

router.route('/shorturl/new').post(urlctrl.postUrl)
router.route('/shorturl/:url').get(urlctrl.convertUrl)
module.exports = router;