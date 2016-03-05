var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  title: String,
  url: String,
  text: String,
  points: Number,
  create_by: String,
  commnets: [{
    comment: String,
    comment_by: String,
    commnet_at: Date
  }],
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('Post', Post);
