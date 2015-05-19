var path        = require('path'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    mirror      = require('gulp-mirror'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    source      = require('vinyl-source-stream'),
    sourcemaps  = require('gulp-sourcemaps'),
    buffer      = require('vinyl-buffer'),
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    handleErrors = require('../util/handleErrors');


function rebundle(devBundle) {
    if (devBundle) {
        gutil.log('Starting dev rebundle...');
    }

    var debug, min;

    debug = sourcemaps.init({loadMaps: true});
    debug.pipe(sourcemaps.write('./', {sourceRoot: './'}))
        .pipe(gulp.dest(paths.out))
        .pipe(gulp.dest(paths.out2App));

    min = rename({ suffix: '.min' });
    min.pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./', {sourceRoot: './', addComment: false}))
        .pipe(gulp.dest(paths.out))
        .pipe(gulp.dest(paths.out2App));

    var stream = this.bundle()
        .on('error', handleErrors.handler)
        .pipe(handleErrors())
        .pipe(source('pixi-dragonbones.js'))
        .pipe(buffer());
    
    if (devBundle) {
        return stream.pipe(debug).once('end', function () {
            gutil.log('Dev rebundle complete.');
        });
    }
    else {
        return stream.pipe(mirror(debug, min));
    }
}

function createBundler(args) {
    args = args || {};
    args.debug = true;

    return browserify(paths.jsEntry, args);
}

function watch(onUpdate) {
    var bundler = watchify(createBundler(watchify.args));

    bundler.on('update', function () {
        var bundle = rebundle.call(this, true);

        if (onUpdate) {
            bundle.on('end', onUpdate);
        }
    });

    return rebundle.call(bundler);
}

module.exports = function bundle() {
    return rebundle.call(createBundler());
};

module.exports.watch = watch;
module.exports.rebundle = rebundle;
module.exports.createBundler = createBundler;
