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
      num_of_comments: 0,
      create_by: userName,
      created_at: Date.now(),
      updated_at: null
    }).save(function(err){

      if(!err){
        callback();
      }else{
        console.log('Loi');
        console.error(err);
      }
    });
  },

  // list all post
  all: function(callback) {
    Post.find(function(err, posts, count) {
      if (!err) {
        posts.forEach(function(post){
          post.timeTillNow  = DateHelper.getTimeTillNow(post.created_at);
        });
        callback(posts);
      } else {
        console.error(err);
      }
    });
  },

  // list all post
  allShowHN: function(callback) {
    Post.find({title:{$regex: /^Show HN*/i}},function(err, posts, count) {
      if (!err) {
        posts.forEach(function(post){
          post.timeTillNow  = DateHelper.getTimeTillNow(post.created_at);
        });
        callback(posts);
      } else {
        console.error(err);
      }
    });
  },

  // list all post
  allAskHN: function(callback) {
    Post.find({title:{$regex: /^Ask HN*/i}},function(err, posts, count) {
      if (!err) {
        posts.forEach(function(post){
          post.timeTillNow  = DateHelper.getTimeTillNow(post.created_at);
        });
        callback(posts);
      } else {
        console.error(err);
      }
    });
  },



};
