var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hackernews2', function(err) {
  if(err){
    console.log('connect database err');
    console.log(err);
  }
});
