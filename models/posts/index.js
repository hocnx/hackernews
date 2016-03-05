var Post = require('./model');
var DateHelper = require('../../helper/DateHelper');

var Comments = require('../comments');

module.exports = {

  // create new post
  createNewPost: function(userName, title, url, text, callback){
    new Post({
      title: title,
      url: url,
      text:text,
      points: 0,
      create_by: userName,
      comments: [],
      created_at: Date.now(),
      updated_at: null
    }).save(function(err){

      if(!err){
        callback();
      }else{
        console.log('Loi');
        console.err(err);
      }
    });
  },

  addComment: function(postId, text, comment_by, callback){
    /*Post.find(function(err, posts, count) {
      console.log(posts);
      if (!err) {
        posts.forEach(function(post){
          post.timeTillNow  = DateHelper.getTimeTillNow(post.created_at);
        });

        callback();
      } else {
        console.err(err);
      }
    });
    +*/
    console.log(postId);
    Post.findById(postId, function(err, post) {
      console.log(post);
      if (!err) {
        post.comments.push(Comments.new(text, comment_by));
        post.save();

        callback();
      }else{
        console.err(err);
      }
    });
  },

  all: function(callback){
    Post.find(function(err, posts, count) {
      if (!err) {
        posts.forEach(function(post){
          post.timeTillNow  = DateHelper.getTimeTillNow(post.created_at);
        });

        callback(posts);
      } else {
        console.err(err);
      }
    });
  },


};
