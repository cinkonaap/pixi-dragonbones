var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    mirror  = require('gulp-mirror'),
    rename  = require('gulp-rename'),
    clone   = require('gulp-clone');

gulp.task('app', function () {
    var debug, min;

    debug = gulp.src(paths.appScripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.appOut));

    /*min = debug.pipe(clone())
        .pipe(uglify('app.min.js'))
        .pipe(gulp.dest(paths.appOut));
*/
    return;
});
