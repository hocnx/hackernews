var Comment = require('./model');
var Post = require('../posts/model');


var DateHelper = require('../../helper/DateHelper');


module.exports = {

 //load all comment of Post
  allComments: function(post_id, callback){
    Comment.find({post_id: post_id},function(err, comments, count) {
      if(!err) {
        comments.forEach(function(comment) {
          comment.timeTillNow  = DateHelper.getTimeTillNow(comment.created_at);
        });
        // find post
        Post.findById(post_id, function(err, post){
          post.timeTillNow = DateHelper.getTimeTillNow(post.created_at);
          callback(post, comments);
        });
      } else {
        console.error(err);
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
        console.error(err);
      }
    });
  },

  childComments: function(id, callback){
    Comment.find({parent_id: id},function(err, comments, count) {
      if(!err) {

        comments.forEach(function(comment) {
          comment.timeTillNow  = DateHelper.getTimeTillNow(comment.created_at);
        });
        callback(comments);
      } else {
        console.error(err);
      }
    });
  },

  // add new comment for a Post
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
            console.error(err);
          }
        });
      }else{
        console.error(err);
      }
    });
  },

  // add child comment
  addChildComment: function(id, text, created_by, callback){
    Comment.findById(id, function(err, comment) {

      if (!err) {
        Post.findById(comment.post_id, function(err, post){

          post.num_of_comments += 1;
          post.save();

          new Comment({
            text:text,
            created_by:created_by,
            title: post.title,
            created_at: Date.now(),
            post_id: post.id,
            parent_id: comment.id

          }).save(function(err, comment){
            if(!err) {
              callback();
            } else {
              console.error(err);
            }
          });
        })

      }else{
        console.error(err);
      }
    });
  },

  findCommentById: function(id, callback){
    Comment.findById(id, function(err, comment) {

      if(!err){
        comment.timeTillNow = DateHelper.getTimeTillNow(comment.created_at);
        callback(comment);
      } else {
        console.error(err);
      }

    });
  }
};
