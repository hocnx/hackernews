var Comment = require('./model');
var Post = require('../posts/model');


var DateHelper = require('../../helper/DateHelper');
var Helper = require('../../helper/Helper');


module.exports = {

 //load all comment of Post
  allComments: function(post_id, callback){
    Comment.find({post_id: post_id},function(err, comments, count) {
      if(!err) {
        comments.forEach(function(comment) {
          comment.timeTillNow  = DateHelper.getTimeTillNow(comment.created_at);
        });
        callback(comments);
      } else {
        console.err(err);
      }
    });
  },

  // list all Comment
  all: function(callback){
    Comment.find(function(err, comments, counts) {
      if(!err) {
        var i = 0;
        comments.forEach(function(comment){
          comment.timeTillNow  = DateHelper.getTimeTillNow(comment.created_at);
          i++;
          if(i == comments.length){
            callback(comments);
          }
        });
      } else {
        console.err(err);
      }
    });
  },

  // add new comment
  addComment: function(postId, text, created_by, callback){
    Post.findById(postId, function(err, post) {
      console.log(post);
      if (!err) {
        post.num_of_comments += 1;
        post.save();
        new Comment({
          text:text,
          created_by:created_by,
          title: post.title,
          created_at: Date.now(),
          post_id: post.id,
          parent_id: ''
        }).save(function(err, comment){
          if(!err) {
            callback();
          } else {
            console.err(err);
          }
        });
      }else{
        console.err(err);
      }
    });
  },
};
