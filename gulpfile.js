'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});


gulp.task('test', function () {
	console.log("hello");
} );

//watch files and performs tasks when an event happens.
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    // Watch .js files    
})

// What will be run with simply writing "$ gulp"
gulp.task('default', ['sass', 'watch']);