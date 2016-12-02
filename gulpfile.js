'use strict';

//Load the plugins 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

// compile scss and minify.
// this can run from Terminal with $ gulp sass.
gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.scss')
  	//We use .pipe() to pipe the source file(s) to a plugin.
    //compile the scss
    .pipe(sass.sync().on('error', sass.logError))
    //add browser prefixes
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
     }))
    //output it in 
    .pipe(gulp.dest('assets/css/'));
});

//watch files and performs tasks when an event happens.
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    // Watch .js files    
})

// What will be run with simply writing "$ gulp"
gulp.task('default', ['sass', 'watch']);