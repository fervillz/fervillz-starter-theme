'use strict';

//Load the plugins 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),  
	rename = require('gulp-rename'),  
	uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

//frontend script paths
var jsFilesFrontend = 'assets/js/js-frontend/**/*.js',  
    jsDest = 'assets/js';

//admin script paths
var jsFilesAdmin = 'assets/js/js-admin/**/*.js',  
    jsDest = 'assets/js';

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
    .pipe(gulp.dest('assets/css/'))
    //enable livereload   
    .pipe(livereload());
});

//scripts optimizer
gulp.task('scripts', function() {  
    return gulp.src(jsFilesFrontend)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

//scripts optimizer
gulp.task('scripts-admin', function() {  
    return gulp.src(jsFilesAdmin)
        .pipe(concat('scripts.admin.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.admin.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

//watch files and performs tasks when an event happens.
gulp.task('watch', function() {
    //enable livereload
    livereload.listen();
    // Watch .scss files
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    // Watch .js files    
    gulp.watch('assets/js/**/*.js', ['scripts'], ['scripts-admin']);
})

// What will be run with simply writing "$ gulp"
gulp.task('default', ['sass', 'watch']);