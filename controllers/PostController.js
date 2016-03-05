var express = require('express');
var router = express.Router();

var Posts = require('../models/posts');


/* GET home page. */
router.get('/news', function(req, res, next) {
  Posts.all(function(posts) {
    res.render('Posts/news', { title: 'HackerNews', showNavbar: true, posts: posts});
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
    res.redirect('/news');
  });
});

// add comment view
router.get('/posts/:id/comments', function(req, res, next) {
  Posts.allComments(req.params.id, function(comments){
    console.log(comments);
    res.render('Comments/comments', { title: 'Add comment', showNavbar: 1, comments: comments });
  });
});



// add commentpostId, text, comment_by, callback
router.post('/posts/:id/comments', function(req, res, next) {
  // TODO: need to replace the user name here
  console.log(req.params.id + req.body.text);
  Posts.addComment(req.params.id, req.body.text, 'AnhNL', function(){
      res.redirect('/news');
  });
});

module.exports = router;
