var gulp = require('gulp')
var express =  require('express')
var runSequence = require('run-sequence')

/*-SERVER SETUP --------------------------------------------------------*/
gulp.task('express', function() {
  app = express();
  app.use(express.static('.'));
  app.listen(5000);
});

/*-CORE TASKS ----------------------------------------------------------*/
gulp.task('default', function(callback){
  runSequence('express', callback);
});