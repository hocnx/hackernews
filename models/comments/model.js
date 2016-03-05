var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema();
Comment.add({
  text: String,
  points: Number,
  comments: [Comment],
  comment_by: String,
  comment_at: String
});

module.exports = mongoose.model('Comment', Comment);
