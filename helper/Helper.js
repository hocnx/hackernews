var async = require('async');

var Comment = require('../models/comments/model');


var generateHTML = function generate(rootId, callback){
  console.log('RootID' + rootId);

  Comment.findById(rootId, function(err, comment) {
    var html = '';
    html += '<ul><li>';
    html += '<span>' +
    '<a href="#">'+comment.created_by+'</a> <a href="#">+comment.timeTillNow</a>'+
    '</span>' +
    '<br />'+
    comment.text +
    '<br />'+
    '<a href="/comments/'+ comment.id +'/reply" class="reply">Reply</a>'+
    '<br />'+
    '<br />';

    Comment.find({parent_id: rootId}, function(err, children) {
      async.each(children, function(child, done) {
        generate(child.id, function(returnHtml){
          html += returnHtml;
          done();
        });
      }, function(err) {
          html += '</li></ul>';
          callback(html);
      });
    });

    });
};

module.exports = {
  generateHTML : generateHTML
};
