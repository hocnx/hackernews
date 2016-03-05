var express = require('express');
var router = express.Router();

var Posts = require('../models/posts');


/* GET home page. */
router.get('/news', function(req, res, next) {
  res.render('Posts/news', { title: 'HackerNews', showNavbar: 1 });
});


/* get create new post page */
router.get('/submit', function(req, res, next) {
  res.render('Posts/submit', { title: 'Create New', showNavbar: 1 });
});

/* create new post */
router.post('/submit', function(req, res, next) {
  // TODO: need to replace the user name here
  Posts.createNewPost('HocNX',req.body.title, req.body.url, req.body.text, function(){
    res.redirect('/news');
  });
});
module.exports = router;
