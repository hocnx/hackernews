var Post = require('./model');

module.exports = {

  // create new post
  createNewPost: function(userName, title, url, text, callback){
    new Post({
      title: title,
      url: url,
      text:text,
      points: 0,
      create_by: userName,
      commnets: null,
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

  all: function(callback){
    Post.find(function(err, posts, count) {
      if (!err) {
        callback(posts);
      } else {
        console.err(err);
      }
    });
  }
};
