var mongoose = require('mongoose');

module.exports = {
  toObjId : function(str) {
    return mongoose.Types.ObjectId(str);
  }
};
