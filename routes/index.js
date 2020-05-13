var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/indonesia', require('./indonesia'))
router.use('/global', require('./global'))
router.use('/api', require('./api'))
router.use('/auth', require('./auth'))
module.exports = router;
