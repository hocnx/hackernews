var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema();
Comment.add({
  text: String,
  points: Number,
  comments: [Comment],
  comment_by: String,
  created_at: Date
});

module.exports = mongoose.model('Comment', Comment);
