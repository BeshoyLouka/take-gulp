var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    //single entry point to browserify
    gulp.src(['public/js/app.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('default', function(){
  // place code for your default task here
});
