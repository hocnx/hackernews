var express = require('express');
var router = express.Router();

var Posts = require('../models/posts');

// vote post
router.post('/v1/posts/:id/vote', funcion(req, res, next) {
  
});

// vote comment
router.post('/v1/posts/:id/comments', function(req, res, next) {

});

module.exports = router;
