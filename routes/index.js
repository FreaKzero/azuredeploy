var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: process.env.ENVTEST || 'No ENVTEST var found' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: process.env.ENVTEST || 'No ENVTEST var found' });
});

router.get('/yay', function(req, res, next) {
  res.render('index', { title: process.env.ENVTEST || 'No ENVTEST var found' });
});

router.get('/wat', function(req, res, next) {
  res.render('index', { title: process.env.ENVTEST || 'No ENVTEST var found' });
});

module.exports = router;
