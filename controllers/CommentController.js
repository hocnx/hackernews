var express = require('express');
var router = express.Router();

var Comments = require('../models/comments');


/* show all comments */
router.get('/', function(req, res, next) {
  Comments.all(function(comments) {
    console.log('respone to client');
    res.render('Comments/comments', { title: 'HackerNews', showNavbar: true, comments: comments});
  });
});


module.exports = router;
