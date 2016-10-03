'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});

gulp.task('js', function(){
    return gulp.src('./js/**/*.js')
        .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js'])
gulp.task('watch', ['sass:watch','js:watch']);
