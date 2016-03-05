var Comment = require('./model');

module.exports = {
  new : function(text, comment_by) {
    return new Comment({
      text:text,
      comment_by:comment_by,
      created_at: Date.now()
    });
  },

 //load all sub comments
  all: function(callback){
    Comment.find(function(err, comments, count) {
      if(!err) {
        callback(comments);
      } else {
        console.err(err);
      }
    });
  }
};
