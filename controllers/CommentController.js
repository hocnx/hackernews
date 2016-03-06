var express = require('express');
var router = express.Router();

var Comments = require('../models/comments');


/* show all comments */
router.get('/', function(req, res, next) {
  Comments.all(function(comments) {
    console.log('respone to client');
    res.render('Comments/comments', { title: 'HackerNews', showNavbar: true, comments: comments, menu:{comments:true}});
  });
});



// add comment view
router.get('/posts/:id', function(req, res, next) {
  Comments.allComments(req.params.id, function(comments){
    console.log(comments);
    res.render('Posts/new_comment', { title: 'Add comment', showNavbar: 1, comments: comments,menu:{}});
  });
});



// add commentpostId, text, comment_by, callback
router.post('/posts/:id', function(req, res, next) {
  // TODO: need to replace the user name here
  console.log(req.params.id + req.body.text);
  Comments.addComment(req.params.id, req.body.text, 'AnhNL', function(){
      res.redirect('/posts');
  });
});
module.exports = router;
