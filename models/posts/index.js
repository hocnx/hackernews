var Post = require('./model');

module.exports = {

  // create new post
  createNewPost: function(userName, title, url, text, callback){
    console.log('hehe');
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
  }

};
