var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/news', function(req, res, next) {
  res.render('Posts/news', { title: 'HackerNews', showNavbar: 1 });
});

module.exports = router;