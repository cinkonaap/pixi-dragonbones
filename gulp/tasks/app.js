var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    mirror  = require('gulp-mirror'),
    rename  = require('gulp-rename');

gulp.task('app', function () {
    var debug;

    debug = gulp.src(paths.appScripts)
        .pipe(concat('app.js'))
        .pipe(mirror(rename('app.min.js')))
        .pipe(uglify())
        .pipe(gulp.dest(paths.appOut));

    return debug;
});
