var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = require('../comments/model').schema;

var Post = new Schema({
  title: String,
  url: String,
  text: String,
  points: Number,
  create_by: String,
  comments: [Comment],
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('Post', Post);
