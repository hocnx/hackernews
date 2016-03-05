var express = require('express');
var moment = require('moment');

var router = express.Router();


var Posts = require('../models/posts');


/* GET home page. */
router.get('/news', function(req, res, next) {
  var loadTime = moment(Date.now());
  Posts.all(function(posts) {
    posts.forEach(function(post){
      post.timeTillNow  = loadTime.diff(moment(post.created_at), 'years') > 0 ?
                          loadTime.diff(moment(post.created_at), 'years') + 'years ago' :
                          loadTime.diff(moment(post.created_at), 'months') > 0 ?
                          loadTime.diff(moment(post.created_at), 'months') + 'month ago' :
                          loadTime.diff(moment(post.created_at), 'days') > 0 ?
                          loadTime.diff(moment(post.created_at), 'days') + 'days ago' :
                          loadTime.diff(moment(post.created_at), 'hours') > 0 ?
                          loadTime.diff(moment(post.created_at), 'hours') + 'hours ago' :
                          loadTime.diff(moment(post.created_at), 'minutes') + 'minutes ago';
      console.log(post.timeTillNow);
    });
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
module.exports = router;
