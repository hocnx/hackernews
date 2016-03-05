var moment = require('moment');


module.exports = {
  getTimeTillNow : function(time) {
    console.log(time + Date.now());
    var loadTime = moment(Date.now());
    return loadTime.diff(moment(time), 'years') > 0 ?
           loadTime.diff(moment(time), 'years') + ' years ago' :
           loadTime.diff(moment(time), 'months') > 0 ?
           loadTime.diff(moment(time), 'months') + ' month ago' :
           loadTime.diff(moment(time), 'days') > 0 ?
           loadTime.diff(moment(time), 'days') + ' days ago' :
           loadTime.diff(moment(time), 'hours') > 0 ?
           loadTime.diff(moment(time), 'hours') + ' hours ago' :
           loadTime.diff(moment(time), 'minutes') + ' minutes ago';
  }
};
