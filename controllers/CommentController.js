var express = require('express');
var router = express.Router();

var Comments = require('../models/comments');


/* show all comments */
router.get('/', function(req, res, next) {
  Comments.all(function(comments) {
    console.log('respone to client' + comments);
    comments.sort(function(a, b){
      return b.created_at > a.created_at;
    });
    res.render('Comments/comments', { title: 'HackerNews', showNavbar: true, comments: comments, menu:{comments:true}});
  });
});



// add comment view of post
router.get('/posts/:id', function(req, res, next) {
  Comments.allComments(req.params.id, function(post, comments){
    console.log(comments);
    res.render('Posts/new_comment', { title: 'Add comment', showNavbar: 1, comments: comments,post: post,menu:{}});
  });
});



// add commentpostId, text, comment_by, callback
router.post('/posts/:id', function(req, res, next) {
  // TODO: need to replace the user name here
  Comments.addComment(req.params.id, req.body.text, 'AnhNL', function(){
      res.redirect('/posts');
  });
});

// show comment of parent comment
router.post('/comments/:id', function(req, res, next) {
  Comments.childComments(req.params.id, function(comments){
    res.render('Posts/new_comment', { title: 'Add comment', showNavbar: 1, comments: comments,post:{},menu:{}});
  });
});

// show comment reply
router.get('/:id/reply', function(req, res, next) {
  console.log('reply');
  Comments.findCommentById(req.params.id, function(comment){
    res.render('comments/reply', { title: 'Reply', showNavbar: 1, comment: comment,menu:{}});
  });
});

// post comment reply
router.post('/:id/reply', function(req, res, next) {
  console.log('reply');
  Comments.addChildComment(req.params.id, req.body.text, 'AnhNL', function(){
    res.redirect('/comments');
  });
});



module.exports = router;
