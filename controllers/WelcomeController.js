var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome', showNavbar: false});

});

module.exports = router;
