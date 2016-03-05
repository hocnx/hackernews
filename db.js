var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hackernews', function(err) {
  if(err){
    console.log('connect database err');
    console.log(err);
  }
});
