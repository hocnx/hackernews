var express = require('express');
var router = express.Router();

var Posts = require('../models/posts');


/* GET home page. */
router.get('/', function(req, res, next) {
  Posts.all(function(posts) {
    //FIXME: sort function should be modified
    posts.sort(function(a, b){
      return b.created_at - a.created_at;
    });
    res.render('Posts/index', { title: 'HackerNews', showNavbar: true, posts: posts});
  });
});

/* Get new page */
router.get('/new', function(req, res, next) {
  Posts.all(function(posts) {
    posts.sort(function(a, b){
      return a.created_at - b.created_at;
    });
    res.render('Posts/index', { title: 'HackerNews', showNavbar: true, posts: posts});
  });
});


/* get create new post page */
router.get('/submit', function(req, res, next) {
  res.render('Posts/submit', { title: 'Create New', showNavbar: 1 });
});

/* create new post */
router.post('/submit', function(req, res, next) {
  // TODO: need to replace the user name here
  Posts.createNewPost('HocNX',req.body.title, req.body.url, req.body.text, function(){
    res.redirect('/posts');
  });
});



module.exports = router;
