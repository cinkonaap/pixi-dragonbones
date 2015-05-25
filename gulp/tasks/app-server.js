var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('appServer', function() {
  gulp.src('./app/public')
    .pipe(webserver());
});
