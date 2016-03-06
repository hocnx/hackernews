
var generateHTML = function generate(comments, rootId){
  var html = '';
  comments.forEach(function(comment){
    if(comment.parent_id == rootId){
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
      html += generate(comments, comment.id);
      html += '</li></ul>';
      // return html;
    }
  });
  return html;
}

module.exports = {
  generateHTML : generateHTML
};
